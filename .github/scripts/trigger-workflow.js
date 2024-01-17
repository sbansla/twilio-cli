const { triggerWorkflow } = require('@sbansla/cli-core').releaseScripts.TriggerWorkflow;
(async () => {
  await triggerWorkflow();
})();
