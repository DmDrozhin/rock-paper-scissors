import ghpages from 'gh-pages';
import path from 'path';
import { fileURLToPath } from 'url';

// Получаем __dirname для ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

ghpages.publish(
  path.join(__dirname, 'dist'),
  {
    branch: 'gh-pages',
    dotfiles: false,
    history: false,
    message: 'Deploy',
  },
  (err) => {
    if (err) console.error(err);
    else console.log('Deploy complete!');
  }
);
