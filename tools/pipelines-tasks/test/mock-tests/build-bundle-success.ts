import tmrm = require('azure-pipelines-task-lib/mock-run');
import testHelpers = require('../testhelpers');

const taskMockRunner: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(testHelpers.TaskEntryPoints.PackagingTask);

testHelpers.setUpBasicMSBuildArguments(taskMockRunner, __filename, /* bundle */ true);

// Don't mock call to MSBuild
taskMockRunner.run(/* noMockTask */ true);