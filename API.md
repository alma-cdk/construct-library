# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlmaCdkConstructLibrary <a name="AlmaCdkConstructLibrary" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary"></a>

#### Initializers <a name="Initializers" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.Initializer"></a>

```typescript
import { AlmaCdkConstructLibrary } from '@alma-cdk/construct-library'

new AlmaCdkConstructLibrary(options: AlmaCdkConstructLibraryOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.Initializer.parameter.options">options</a></code> | <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions">AlmaCdkConstructLibraryOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.Initializer.parameter.options"></a>

- *Type:* <a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions">AlmaCdkConstructLibraryOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addCdkDependencies">addCdkDependencies</a></code> | Adds dependencies to AWS CDK modules. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.addCdkTestDependencies">addCdkTestDependencies</a></code> | Adds AWS CDK modules as dev dependencies. |

---

##### `toString` <a name="toString" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: ...string[]): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* ...string[]

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: ...string[]): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addBundledDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addCompileCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### `addDeps` <a name="addDeps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addDeps"></a>

```typescript
public addDeps(deps: ...string[]): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addDevDeps"></a>

```typescript
public addDevDeps(deps: ...string[]): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addDevDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addKeywords"></a>

```typescript
public addKeywords(keywords: ...string[]): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addKeywords.parameter.keywords"></a>

- *Type:* ...string[]

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: ...string[]): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addPeerDeps.parameter.deps"></a>

- *Type:* ...string[]

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addTestCommand"></a>

```typescript
public addTestCommand(commands: ...string[]): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addTestCommand.parameter.commands"></a>

- *Type:* ...string[]

---

##### ~~`hasScript`~~ <a name="hasScript" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### ~~`addCdkDependencies`~~ <a name="addCdkDependencies" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addCdkDependencies"></a>

```typescript
public addCdkDependencies(deps: ...string[]): void
```

Adds dependencies to AWS CDK modules.

Since this is a library project, dependencies will be added as peer dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addCdkDependencies.parameter.deps"></a>

- *Type:* ...string[]

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

##### ~~`addCdkTestDependencies`~~ <a name="addCdkTestDependencies" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addCdkTestDependencies"></a>

```typescript
public addCdkTestDependencies(deps: ...string[]): void
```

Adds AWS CDK modules as dev dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.addCdkTestDependencies.parameter.deps"></a>

- *Type:* ...string[]

names of cdk modules (e.g. `@aws-cdk/aws-lambda`).

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.isConstruct"></a>

```typescript
import { AlmaCdkConstructLibrary } from '@alma-cdk/construct-library'

AlmaCdkConstructLibrary.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.isProject"></a>

```typescript
import { AlmaCdkConstructLibrary } from '@alma-cdk/construct-library'

AlmaCdkConstructLibrary.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.of"></a>

```typescript
import { AlmaCdkConstructLibrary } from '@alma-cdk/construct-library'

AlmaCdkConstructLibrary.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.biome">biome</a></code> | <code>projen.javascript.Biome</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version supported by this package. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | The minimum node version required by this package to function. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The target CDK version for this library. |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `biome`<sup>Optional</sup> <a name="biome" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.biome"></a>

```typescript
public readonly biome: Biome;
```

- *Type:* projen.javascript.Biome

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version supported by this package.

The value indicates the package is incompatible with newer versions.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

The minimum node version required by this package to function.

This value indicates the package is incompatible with older versions.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The target CDK version for this library.

---

##### ~~`version`~~<sup>Required</sup> <a name="version" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.version"></a>

- *Deprecated:* use `cdkVersion`

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `workflowNodeVersion`<sup>Required</sup> <a name="workflowNodeVersion" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@alma-cdk/construct-library.AlmaCdkConstructLibrary.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlmaCdkConstructLibraryOptions <a name="AlmaCdkConstructLibraryOptions" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions"></a>

Needs to be manually typed due to JSII limitations.

#### Initializer <a name="Initializer" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.Initializer"></a>

```typescript
import { AlmaCdkConstructLibraryOptions } from '@alma-cdk/construct-library'

const almaCdkConstructLibraryOptions: AlmaCdkConstructLibraryOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.author">author</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.authorAddress">authorAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.repositoryUrl">repositoryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.stability">stability</a></code> | <code>projen.cdk.Stability</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.deps">deps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.keywords">keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | *No description.* |

---

##### `author`<sup>Required</sup> <a name="author" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.author"></a>

```typescript
public readonly author: string;
```

- *Type:* string

---

##### `authorAddress`<sup>Required</sup> <a name="authorAddress" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.authorAddress"></a>

```typescript
public readonly authorAddress: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `majorVersion`<sup>Required</sup> <a name="majorVersion" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `repositoryUrl`<sup>Required</sup> <a name="repositoryUrl" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.repositoryUrl"></a>

```typescript
public readonly repositoryUrl: string;
```

- *Type:* string

---

##### `stability`<sup>Required</sup> <a name="stability" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.stability"></a>

```typescript
public readonly stability: Stability;
```

- *Type:* projen.cdk.Stability

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}

---

##### `releaseEnvironment`<sup>Optional</sup> <a name="releaseEnvironment" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.releaseEnvironment"></a>

```typescript
public readonly releaseEnvironment: string;
```

- *Type:* string

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string

---



