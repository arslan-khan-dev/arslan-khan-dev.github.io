// Turns a root-absolute public-folder path (e.g. "/resume.pdf") into a
// relative one, so the file:// build and GitHub Pages both resolve it.
export default function withBase(path) {
  return './' + path.replace(/^\//, '')
}
