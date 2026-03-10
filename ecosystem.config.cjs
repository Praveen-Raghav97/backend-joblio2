// module.exports = {
//   apps: [
//     {
//       name: "backend",
//       script: "dist/index.js",
//       interpreter: "node",
//       watch: false
//     }
//   ]
// };

module.exports = {
  apps: [
    {
      name: "backend-dev",
      script: "dist/index.js",
      watch: ["dist"],
      ignore_watch: ["node_modules"],
      watch_delay: 500
    }
  ]
};