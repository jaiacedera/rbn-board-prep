import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { app } from '../backend/src/app.ts';

test('sample logic, persisted progress, and every React route', async () => {
  const vite = await createServer({ root: 'frontend', server: { middlewareMode: true }, appType: 'custom' });
  const values = new Map();
  globalThis.localStorage = { getItem: key => values.get(key) || null, setItem: (key, value) => values.set(key, value) };
  globalThis.location = { hash: '' };
  try {
    const { gradeQuiz } = await vite.ssrLoadModule('/src/utils/quiz.ts');
    const { questions } = await vite.ssrLoadModule('/src/services/demoData.ts');
    const { getRecommendation } = await vite.ssrLoadModule('/src/utils/recommendation.ts');
    const { tutorReply } = await vite.ssrLoadModule('/src/services/demoTutor.ts');
    const { loadProgress, saveProgress } = await vite.ssrLoadModule('/src/services/progressStorage.ts');
    assert.throws(() => gradeQuiz([null, null, null, null, null]));
    const perfect = gradeQuiz(questions.map(q => q.answer));
    assert.equal(perfect.score, 100);
    const missed = gradeQuiz(questions.map(q => (q.answer + 1) % 4));
    assert.equal(missed.correct, 0);
    const progress = { completed: ['fundamentals'], attempts: [missed] };
    saveProgress(progress);
    assert.deepEqual(loadProgress(), progress);
    assert.match(getRecommendation(progress), /Patient safety/);
    assert.match(tutorReply('Explain in Taglish', progress), /ADPIE ang madaling tandaan/);
    assert.equal(tutorReply('What should I review next?', progress), getRecommendation(progress));
    values.set('nbp-progress', '{invalid');
    assert.deepEqual(loadProgress(), { completed: [], attempts: [] });
    saveProgress(progress);
    const { default: App } = await vite.ssrLoadModule('/src/App.tsx');
    const { DemoProvider } = await vite.ssrLoadModule('/src/context/DemoContext.tsx');
    const routes = { home: 'A little more prepared.', modules: 'Review modules', lesson: 'The nursing process', exams: 'Practice exams', quiz: 'Practice exams', results: 'Your sample exam results', progress: 'My progress', tutor: 'Your review tutor', plans: 'Premium review access', 'contact-us': 'Contact us', unknown: 'A little more prepared.' };
    for (const [route, text] of Object.entries(routes)) {
      location.hash = `#${route}`;
      const html = renderToStaticMarkup(createElement(DemoProvider, null, createElement(App)));
      assert.ok(html.includes(text), `${route}: ${text}`);
      assert.ok(html.includes('NURSING BOARD REVIEW'));
    }
  } finally { await vite.close(); delete globalThis.localStorage; delete globalThis.location; }
});

test('Express health, CORS, and unimplemented endpoints', async () => {
  const server = app.listen(0, '127.0.0.1');
  await new Promise(resolve => server.once('listening', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const response = await fetch(`${base}/api/health`, { headers: { Origin: 'http://localhost:5173' } });
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('access-control-allow-origin'), 'http://localhost:5173');
    assert.equal((await response.json()).status, 'ok');
    const denied = await fetch(`${base}/api/health`, { headers: { Origin: 'https://unrelated.example' } });
    assert.equal(denied.headers.get('access-control-allow-origin'), null);
    assert.equal((await fetch(`${base}/api/contact`, { method: 'POST' })).status, 404);
  } finally { await new Promise(resolve => server.close(resolve)); }
});

test('static build references and public assets exist without server secrets', async () => {
  const root = 'frontend/dist/';
  const html = await readFile(root + 'index.html', 'utf8');
  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) await access(root + match[1].replace(/^\//, ''));
  for (const name of await readdir('frontend/public')) assert.deepEqual(await readFile('frontend/public/' + name), await readFile(root + name));
  const manifest = JSON.parse(await readFile(root + 'asset-manifest.json', 'utf8'));
  for (const entry of Object.values(manifest)) for (const name of [entry.file, ...(entry.css || []), ...(entry.assets || [])]) await access(root + name);
  const files = await readdir(root, { recursive: true });
  assert.ok(!files.some(name => name.includes('.env') || name.includes('backend')));
  for (const name of files.filter(name => name.endsWith('.js'))) assert.doesNotMatch(await readFile(root + name, 'utf8'), /DATABASE_URL|SUPABASE_SERVICE_ROLE_KEY/);
});
