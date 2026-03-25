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
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.pnpmSettings">pnpmSettings</a></code> | <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification">PnpmWorkspaceSpecification</a></code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.releaseEnvironment">releaseEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.sonarProjectPropertiesExtraLines">sonarProjectPropertiesExtraLines</a></code> | <code>string[]</code> | Appended to generated `sonar-project.properties` after the default lines (e.g. Sonar multicriteria ignores). |
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

##### `pnpmSettings`<sup>Optional</sup> <a name="pnpmSettings" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.pnpmSettings"></a>

```typescript
public readonly pnpmSettings: PnpmWorkspaceSpecification;
```

- *Type:* <a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification">PnpmWorkspaceSpecification</a>

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

##### `sonarProjectPropertiesExtraLines`<sup>Optional</sup> <a name="sonarProjectPropertiesExtraLines" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.sonarProjectPropertiesExtraLines"></a>

```typescript
public readonly sonarProjectPropertiesExtraLines: string[];
```

- *Type:* string[]

Appended to generated `sonar-project.properties` after the default lines (e.g. Sonar multicriteria ignores).

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@alma-cdk/construct-library.AlmaCdkConstructLibraryOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string

---

### AuditConfig <a name="AuditConfig" id="@alma-cdk/construct-library.AuditConfig"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/construct-library.AuditConfig.Initializer"></a>

```typescript
import { AuditConfig } from '@alma-cdk/construct-library'

const auditConfig: AuditConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.AuditConfig.property.ignoreCves">ignoreCves</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.AuditConfig.property.ignoreGhsas">ignoreGhsas</a></code> | <code>string[]</code> | *No description.* |

---

##### `ignoreCves`<sup>Optional</sup> <a name="ignoreCves" id="@alma-cdk/construct-library.AuditConfig.property.ignoreCves"></a>

```typescript
public readonly ignoreCves: string[];
```

- *Type:* string[]

---

##### `ignoreGhsas`<sup>Optional</sup> <a name="ignoreGhsas" id="@alma-cdk/construct-library.AuditConfig.property.ignoreGhsas"></a>

```typescript
public readonly ignoreGhsas: string[];
```

- *Type:* string[]

---

### ExecutionEnv <a name="ExecutionEnv" id="@alma-cdk/construct-library.ExecutionEnv"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/construct-library.ExecutionEnv.Initializer"></a>

```typescript
import { ExecutionEnv } from '@alma-cdk/construct-library'

const executionEnv: ExecutionEnv = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.ExecutionEnv.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | *No description.* |

---

##### `nodeVersion`<sup>Optional</sup> <a name="nodeVersion" id="@alma-cdk/construct-library.ExecutionEnv.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string

---

### PackageExtension <a name="PackageExtension" id="@alma-cdk/construct-library.PackageExtension"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/construct-library.PackageExtension.Initializer"></a>

```typescript
import { PackageExtension } from '@alma-cdk/construct-library'

const packageExtension: PackageExtension = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.PackageExtension.property.dependencies">dependencies</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.PackageExtension.property.optionalDependencies">optionalDependencies</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.PackageExtension.property.peerDependencies">peerDependencies</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.PackageExtension.property.peerDependenciesMeta">peerDependenciesMeta</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/construct-library.PeerDependencyMetaValue">PeerDependencyMetaValue</a>}</code> | *No description.* |

---

##### `dependencies`<sup>Optional</sup> <a name="dependencies" id="@alma-cdk/construct-library.PackageExtension.property.dependencies"></a>

```typescript
public readonly dependencies: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `optionalDependencies`<sup>Optional</sup> <a name="optionalDependencies" id="@alma-cdk/construct-library.PackageExtension.property.optionalDependencies"></a>

```typescript
public readonly optionalDependencies: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `peerDependencies`<sup>Optional</sup> <a name="peerDependencies" id="@alma-cdk/construct-library.PackageExtension.property.peerDependencies"></a>

```typescript
public readonly peerDependencies: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `peerDependenciesMeta`<sup>Optional</sup> <a name="peerDependenciesMeta" id="@alma-cdk/construct-library.PackageExtension.property.peerDependenciesMeta"></a>

```typescript
public readonly peerDependenciesMeta: {[ key: string ]: PeerDependencyMetaValue};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/construct-library.PeerDependencyMetaValue">PeerDependencyMetaValue</a>}

---

### PeerDependencyMetaValue <a name="PeerDependencyMetaValue" id="@alma-cdk/construct-library.PeerDependencyMetaValue"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/construct-library.PeerDependencyMetaValue.Initializer"></a>

```typescript
import { PeerDependencyMetaValue } from '@alma-cdk/construct-library'

const peerDependencyMetaValue: PeerDependencyMetaValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.PeerDependencyMetaValue.property.optional">optional</a></code> | <code>boolean</code> | *No description.* |

---

##### `optional`<sup>Optional</sup> <a name="optional" id="@alma-cdk/construct-library.PeerDependencyMetaValue.property.optional"></a>

```typescript
public readonly optional: boolean;
```

- *Type:* boolean

---

### PeerDependencyRules <a name="PeerDependencyRules" id="@alma-cdk/construct-library.PeerDependencyRules"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/construct-library.PeerDependencyRules.Initializer"></a>

```typescript
import { PeerDependencyRules } from '@alma-cdk/construct-library'

const peerDependencyRules: PeerDependencyRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.PeerDependencyRules.property.allowAny">allowAny</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.PeerDependencyRules.property.allowedVersions">allowedVersions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.PeerDependencyRules.property.ignoreMissing">ignoreMissing</a></code> | <code>string[]</code> | *No description.* |

---

##### `allowAny`<sup>Optional</sup> <a name="allowAny" id="@alma-cdk/construct-library.PeerDependencyRules.property.allowAny"></a>

```typescript
public readonly allowAny: string[];
```

- *Type:* string[]

---

##### `allowedVersions`<sup>Optional</sup> <a name="allowedVersions" id="@alma-cdk/construct-library.PeerDependencyRules.property.allowedVersions"></a>

```typescript
public readonly allowedVersions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `ignoreMissing`<sup>Optional</sup> <a name="ignoreMissing" id="@alma-cdk/construct-library.PeerDependencyRules.property.ignoreMissing"></a>

```typescript
public readonly ignoreMissing: string[];
```

- *Type:* string[]

---

### PnpmWorkspaceSpecification <a name="PnpmWorkspaceSpecification" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification"></a>

JSON schema for pnpm-workspace.yaml files.

#### Initializer <a name="Initializer" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.Initializer"></a>

```typescript
import { PnpmWorkspaceSpecification } from '@alma-cdk/construct-library'

const pnpmWorkspaceSpecification: PnpmWorkspaceSpecification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.allowBuilds">allowBuilds</a></code> | <code>{[ key: string ]: boolean}</code> | A map of package matchers to explicitly allow (`true`) or disallow (`false`) script execution. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.allowedDeprecatedVersions">allowedDeprecatedVersions</a></code> | <code>{[ key: string ]: string}</code> | A list of deprecated versions that the warnings are suppressed. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.allowNonAppliedPatches">allowNonAppliedPatches</a></code> | <code>boolean</code> | When true, installation won't fail if some of the patches from the "patchedDependencies" field were not applied. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.allowUnusedPatches">allowUnusedPatches</a></code> | <code>boolean</code> | When true, installation won't fail if some of the patches from the "patchedDependencies" field were not applied. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.auditConfig">auditConfig</a></code> | <code><a href="#@alma-cdk/construct-library.AuditConfig">AuditConfig</a></code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.auditLevel">auditLevel</a></code> | <code>string</code> | Controls the level of issues reported by `pnpm audit`. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.autoInstallPeers">autoInstallPeers</a></code> | <code>boolean</code> | When true, any missing non-optional peer dependencies are automatically installed. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.blockExoticSubdeps">blockExoticSubdeps</a></code> | <code>boolean</code> | When set to true, it prevents the resolution of exotic protocols (like git+ssh: or direct https: tarballs) in transitive dependencies. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ca">ca</a></code> | <code>string</code> | The Certificate Authority signing certificate that is trusted for SSL connections to the registry. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.cacheDir">cacheDir</a></code> | <code>string</code> | The location of the cache (package metadata and dlx). |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.cafile">cafile</a></code> | <code>string</code> | A path to a file containing one or multiple Certificate Authority signing certificates. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.catalog">catalog</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.catalogMode">catalogMode</a></code> | <code>string</code> | Controlling if and how dependencies are added to the default catalog. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.catalogs">catalogs</a></code> | <code>{[ key: string ]: {[ key: string ]: string}}</code> | Define arbitrarily named catalogs. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.cert">cert</a></code> | <code>string</code> | A client certificate to pass when accessing the registry. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.childConcurrency">childConcurrency</a></code> | <code>number</code> | The maximum number of child processes to allocate simultaneously to build node_modules. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.cleanupUnusedCatalogs">cleanupUnusedCatalogs</a></code> | <code>boolean</code> | When set to `true`, pnpm will remove unused catalog entries during installation. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.color">color</a></code> | <code>string</code> | Controls colors in the output. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.configDependencies">configDependencies</a></code> | <code>{[ key: string ]: string}</code> | Config dependencies allow you to share and centralize configuration files, settings, and hooks across multiple projects. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.dangerouslyAllowAllBuilds">dangerouslyAllowAllBuilds</a></code> | <code>boolean</code> | If set to true, all build scripts (e.g. preinstall, install, postinstall) from dependencies will run automatically, without requiring approval. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.dedupeDirectDeps">dedupeDirectDeps</a></code> | <code>boolean</code> | When set to true, dependencies that are already symlinked to the root node_modules directory of the workspace will not be symlinked to subproject node_modules directories. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.dedupeInjectedDeps">dedupeInjectedDeps</a></code> | <code>boolean</code> | When this setting is enabled, dependencies that are injected will be symlinked from the workspace whenever possible. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.dedupePeerDependents">dedupePeerDependents</a></code> | <code>boolean</code> | When this setting is set to true, packages with peer dependencies will be deduplicated after peers resolution. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.deployAllFiles">deployAllFiles</a></code> | <code>boolean</code> | When deploying a package or installing a local package, all files of the package are copied. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.disallowWorkspaceCycles">disallowWorkspaceCycles</a></code> | <code>boolean</code> | When set to true, installation will fail if the workspace has cycles. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.dlxCacheMaxAge">dlxCacheMaxAge</a></code> | <code>number</code> | The time in minutes after which dlx cache expires. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.enableGlobalVirtualStore">enableGlobalVirtualStore</a></code> | <code>boolean</code> | When enabled, node_modules contains only symlinks to a central virtual store, rather than to node_modules/.pnpm. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.enableModulesDir">enableModulesDir</a></code> | <code>boolean</code> | When false, pnpm will not write any files to the modules directory (node_modules). |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.enablePrePostScripts">enablePrePostScripts</a></code> | <code>boolean</code> | When true, pnpm will run any pre/post scripts automatically. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.engineStrict">engineStrict</a></code> | <code>boolean</code> | If this is enabled, pnpm will not install any package that claims to not be compatible with the current Node version. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.executionEnv">executionEnv</a></code> | <code><a href="#@alma-cdk/construct-library.ExecutionEnv">ExecutionEnv</a></code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.extendNodePath">extendNodePath</a></code> | <code>boolean</code> | When false, the NODE_PATH environment variable is not set in the command shims. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.failIfNoMatch">failIfNoMatch</a></code> | <code>boolean</code> | If true, pnpm will fail if no packages match the filter. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.fetchRetries">fetchRetries</a></code> | <code>number</code> | How many times to retry if pnpm fails to fetch from the registry. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.fetchRetryFactor">fetchRetryFactor</a></code> | <code>number</code> | The exponential factor for retry backoff. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.fetchRetryMaxtimeout">fetchRetryMaxtimeout</a></code> | <code>number</code> | The maximum fallback timeout to ensure the retry factor does not make requests too long. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.fetchRetryMintimeout">fetchRetryMintimeout</a></code> | <code>number</code> | The minimum (base) timeout for retrying requests. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.fetchTimeout">fetchTimeout</a></code> | <code>number</code> | The maximum amount of time to wait for HTTP requests to complete. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.forceLegacyDeploy">forceLegacyDeploy</a></code> | <code>boolean</code> | By default, pnpm deploy will try creating a dedicated lockfile from a shared lockfile for deployment. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.gitBranchLockfile">gitBranchLockfile</a></code> | <code>boolean</code> | When set to true, the generated lockfile name after installation will be named based on the current branch name to completely avoid merge conflicts. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.gitChecks">gitChecks</a></code> | <code>boolean</code> | Check if current branch is your publish branch, clean, and up-to-date with remote. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.gitShallowHosts">gitShallowHosts</a></code> | <code>string[]</code> | When fetching dependencies that are Git repositories, if the host is listed in this setting, pnpm will use shallow cloning to fetch only the needed commit, not all the history. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.globalBinDir">globalBinDir</a></code> | <code>string</code> | Allows to set the target directory for the bin files of globally installed packages. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.globalDir">globalDir</a></code> | <code>string</code> | Specify a custom directory to store global packages. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.globalPnpmfile">globalPnpmfile</a></code> | <code>string</code> | The location of a global pnpmfile. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.hoist">hoist</a></code> | <code>boolean</code> | When true, all dependencies are hoisted to node_modules/.pnpm/node_modules. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.hoistPattern">hoistPattern</a></code> | <code>string[]</code> | Tells pnpm which packages should be hoisted to node_modules/.pnpm/node_modules. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.hoistWorkspacePackages">hoistWorkspacePackages</a></code> | <code>boolean</code> | When true, packages from the workspaces are symlinked to either <workspace_root>/node_modules/.pnpm/node_modules or to <workspace_root>/node_modules depending on other hoisting settings (hoistPattern and publicHoistPattern). |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.httpsProxy">httpsProxy</a></code> | <code>string</code> | A proxy to use for outgoing HTTPS requests. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoreCompatibilityDb">ignoreCompatibilityDb</a></code> | <code>boolean</code> | During installation the dependencies of some packages are automatically patched. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoredBuiltDependencies">ignoredBuiltDependencies</a></code> | <code>string[]</code> | A list of package names that should not be built during installation. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoreDepScripts">ignoreDepScripts</a></code> | <code>boolean</code> | Do not execute any scripts of the installed packages. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoredOptionalDependencies">ignoredOptionalDependencies</a></code> | <code>string[]</code> | A list of optional dependencies that the install should be skipped. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignorePatchFailures">ignorePatchFailures</a></code> | <code>boolean</code> | Default is undefined. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignorePnpmfile">ignorePnpmfile</a></code> | <code>boolean</code> | .pnpmfile.cjs will be ignored. Useful together with --ignore-scripts when you want to make sure that no script gets executed during install. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoreScripts">ignoreScripts</a></code> | <code>boolean</code> | Do not execute any scripts defined in the project package.json and its dependencies. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoreWorkspaceCycles">ignoreWorkspaceCycles</a></code> | <code>boolean</code> | When set to true, no workspace cycle warnings will be printed. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoreWorkspaceRootCheck">ignoreWorkspaceRootCheck</a></code> | <code>boolean</code> | Adding a new dependency to the root workspace package fails, unless the --ignore-workspace-root-check or -w flag is used. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.includeWorkspaceRoot">includeWorkspaceRoot</a></code> | <code>boolean</code> | When executing commands recursively in a workspace, execute them on the root workspace project as well. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.injectWorkspacePackages">injectWorkspacePackages</a></code> | <code>boolean</code> | Enables hard-linking of all local workspace dependencies instead of symlinking them. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.key">key</a></code> | <code>string</code> | A client key to pass when accessing the registry. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.linkWorkspacePackages">linkWorkspacePackages</a></code> | <code>boolean \| string</code> | If this is enabled, locally available packages are linked to node_modules instead of being downloaded from the registry. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.localAddress">localAddress</a></code> | <code>string</code> | The IP address of the local interface to use when making connections to the npm registry. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.lockfile">lockfile</a></code> | <code>boolean</code> | When set to false, pnpm won't read or generate a pnpm-lock.yaml file. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.lockfileIncludeTarballUrl">lockfileIncludeTarballUrl</a></code> | <code>boolean</code> | Add the full URL to the package's tarball to every entry in pnpm-lock.yaml. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.loglevel">loglevel</a></code> | <code>string</code> | Any logs at or higher than the given level will be shown. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.managePackageManagerVersions">managePackageManagerVersions</a></code> | <code>boolean</code> | When enabled, pnpm will automatically download and run the version of pnpm specified in the packageManager field of package.json. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.maxsockets">maxsockets</a></code> | <code>number</code> | The maximum number of connections to use per origin (protocol/host/port combination). |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.mergeGitBranchLockfilesBranchPattern">mergeGitBranchLockfilesBranchPattern</a></code> | <code>string[]</code> | This configuration matches the current branch name to determine whether to merge all git branch lockfile files. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.minimumReleaseAge">minimumReleaseAge</a></code> | <code>number</code> | minimumReleaseAge defines the minimum number of minutes that must pass after a version is published before pnpm will install it. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.minimumReleaseAgeExclude">minimumReleaseAgeExclude</a></code> | <code>string[]</code> | If you set `minimumReleaseAge` but need certain dependencies to always install the newest version immediately, you can list them under `minimumReleaseAgeExclude`. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.modulesCacheMaxAge">modulesCacheMaxAge</a></code> | <code>number</code> | The time in minutes after which orphan packages from the modules directory should be removed. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.modulesDir">modulesDir</a></code> | <code>string</code> | The directory in which dependencies will be installed (instead of node_modules). |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.networkConcurrency">networkConcurrency</a></code> | <code>number</code> | Controls the maximum number of HTTP(S) requests to process simultaneously. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.neverBuiltDependencies">neverBuiltDependencies</a></code> | <code>string[]</code> | A list of dependencies to run builds for. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.nodeLinker">nodeLinker</a></code> | <code>string</code> | Defines what linker should be used for installing Node packages. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.nodeOptions">nodeOptions</a></code> | <code>string</code> | Options to pass through to Node.js via the NODE_OPTIONS environment variable. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.nodeVersion">nodeVersion</a></code> | <code>string</code> | The Node.js version to use when checking a package's engines setting. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.noproxy">noproxy</a></code> | <code>string</code> | A comma-separated string of domain extensions that a proxy should not be used for. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.npmPath">npmPath</a></code> | <code>string</code> | The location of the npm binary that pnpm uses for some actions, like publishing. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.onlyBuiltDependencies">onlyBuiltDependencies</a></code> | <code>string[]</code> | A list of package names that are allowed to be executed during installation. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.onlyBuiltDependenciesFile">onlyBuiltDependenciesFile</a></code> | <code>string</code> | Specifies a JSON file that lists the only packages permitted to run installation scripts during the pnpm install process. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.optimisticRepeatInstall">optimisticRepeatInstall</a></code> | <code>boolean</code> | When enabled, a fast check will be performed before proceeding to installation. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.overrides">overrides</a></code> | <code>{[ key: string ]: string}</code> | Used to override any dependency in the dependency graph. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.packageExtensions">packageExtensions</a></code> | <code>{[ key: string ]: <a href="#@alma-cdk/construct-library.PackageExtension">PackageExtension</a>}</code> | Used to extend the existing package definitions with additional information. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.packageImportMethod">packageImportMethod</a></code> | <code>string</code> | Controls the way packages are imported from the store (if you want to disable symlinks inside node_modules, then you need to change the nodeLinker setting, not this one). |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.packageManagerStrict">packageManagerStrict</a></code> | <code>boolean</code> | If this setting is disabled, pnpm will not fail if a different package manager is specified in the packageManager field of package.json. When enabled, only the package name is checked (since pnpm v9.2.0), so you can still run any version of pnpm regardless of the version specified in the packageManager field. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.packageManagerStrictVersion">packageManagerStrictVersion</a></code> | <code>boolean</code> | When enabled, pnpm will fail if its version doesn't exactly match the version specified in the packageManager field of package.json. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.packages">packages</a></code> | <code>string[]</code> | Workspace package paths. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.patchedDependencies">patchedDependencies</a></code> | <code>{[ key: string ]: string}</code> | A list of dependencies that are patched. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.patchesDir">patchesDir</a></code> | <code>string</code> | The generated patch file will be saved to this directory. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.peerDependencyRules">peerDependencyRules</a></code> | <code><a href="#@alma-cdk/construct-library.PeerDependencyRules">PeerDependencyRules</a></code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.peersSuffixMaxLength">peersSuffixMaxLength</a></code> | <code>number</code> | Max length of the peer IDs suffix added to dependency keys in the lockfile. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.pnpmfile">pnpmfile</a></code> | <code>string</code> | The location of the local pnpmfile. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.preferFrozenLockfile">preferFrozenLockfile</a></code> | <code>boolean</code> | When set to true and the available pnpm-lock.yaml satisfies the package.json dependencies directive, a headless installation is performed. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.preferOffline">preferOffline</a></code> | <code>boolean</code> | Bypass staleness checks for cached data. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.preferSymlinkedExecutables">preferSymlinkedExecutables</a></code> | <code>boolean</code> | Create symlinks to executables in node_modules/.bin instead of command shims. This setting is ignored on Windows, where only command shims work. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.preferWorkspacePackages">preferWorkspacePackages</a></code> | <code>boolean</code> | If this is enabled, local packages from the workspace are preferred over packages from the registry, even if there is a newer version of the package in the registry. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.proxy">proxy</a></code> | <code>string</code> | A proxy to use for outgoing http requests. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.publicHoistPattern">publicHoistPattern</a></code> | <code>string[]</code> | Unlike hoistPattern, which hoists dependencies to a hidden modules directory inside the virtual store, publicHoistPattern hoists dependencies matching the pattern to the root modules directory. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.publishBranch">publishBranch</a></code> | <code>string</code> | The primary branch of the repository which is used for publishing the latest changes. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.recursiveInstall">recursiveInstall</a></code> | <code>boolean</code> | If this is enabled, the primary behaviour of pnpm install becomes that of pnpm install -r, meaning the install is performed on all workspace or subdirectory packages. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.registry">registry</a></code> | <code>string</code> | The base URL of the npm package registry (trailing slash included). |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.registrySupportsTimeField">registrySupportsTimeField</a></code> | <code>boolean</code> | Set this to true if the registry that you are using returns the "time" field in the abbreviated metadata. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.requiredScripts">requiredScripts</a></code> | <code>string[]</code> | A list of scripts that must exist in each project. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.resolutionMode">resolutionMode</a></code> | <code>string</code> | Determines how pnpm resolves dependencies, See https://pnpm.io/settings#resolutionmode. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.resolvePeersFromWorkspaceRoot">resolvePeersFromWorkspaceRoot</a></code> | <code>boolean</code> | When enabled, dependencies of the root workspace project are used to resolve peer dependencies of any projects in the workspace. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.saveExact">saveExact</a></code> | <code>boolean</code> | Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.savePrefix">savePrefix</a></code> | <code>string</code> | Configure how versions of packages installed to a package.json file get prefixed. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.saveWorkspaceProtocol">saveWorkspaceProtocol</a></code> | <code>boolean \| string</code> | This setting controls how dependencies that are linked from the workspace are added to package.json. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.scriptShell">scriptShell</a></code> | <code>string</code> | The shell to use for scripts run with the pnpm run command. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.shamefullyHoist">shamefullyHoist</a></code> | <code>boolean</code> | By default, pnpm creates a semistrict node_modules, meaning dependencies have access to undeclared dependencies but modules outside of node_modules do not. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.sharedWorkspaceLockfile">sharedWorkspaceLockfile</a></code> | <code>boolean</code> | If this is enabled, pnpm creates a single pnpm-lock.yaml file in the root of the workspace. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.shellEmulator">shellEmulator</a></code> | <code>boolean</code> | When true, pnpm will use a JavaScript implementation of a bash-like shell to execute scripts. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.sideEffectsCache">sideEffectsCache</a></code> | <code>boolean</code> | Use and cache the results of (pre/post)install hooks. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.sideEffectsCacheReadonly">sideEffectsCacheReadonly</a></code> | <code>boolean</code> | Only use the side effects cache if present, do not create it for new packages. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.stateDir">stateDir</a></code> | <code>string</code> | The location where all the packages are saved on the disk. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.storeDir">storeDir</a></code> | <code>string</code> | The location where all the packages are saved on the disk. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.strictDepBuilds">strictDepBuilds</a></code> | <code>boolean</code> | When strictDepBuilds is enabled, the installation will exit with a non-zero exit code if any dependencies have unreviewed build scripts (aka postinstall scripts). |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.strictPeerDependencies">strictPeerDependencies</a></code> | <code>boolean</code> | If this is enabled, commands will fail if there is a missing or invalid peer dependency in the tree. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.strictSsl">strictSsl</a></code> | <code>boolean</code> | Whether or not to do SSL key validation when making requests to the registry via HTTPS. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.strictStorePkgContentCheck">strictStorePkgContentCheck</a></code> | <code>boolean</code> | Some registries allow the exact same content to be published under different package names and/or versions. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.supportedArchitectures">supportedArchitectures</a></code> | <code><a href="#@alma-cdk/construct-library.SupportedArchitectures">SupportedArchitectures</a></code> | Specifies architectures for which you'd like to install optional dependencies, even if they don't match the architecture of the system running the install. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.symlink">symlink</a></code> | <code>boolean</code> | When symlink is set to false, pnpm creates a virtual store directory without any symlinks. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.syncInjectedDepsAfterScripts">syncInjectedDepsAfterScripts</a></code> | <code>string[]</code> | Injected workspace dependencies are collections of hardlinks, which don't add or remove the files when their sources change. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.tag">tag</a></code> | <code>string</code> | If you pnpm add a package and you don't provide a specific version, then it will install the package at the version registered under the tag from this setting. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.trustPolicy">trustPolicy</a></code> | <code>string</code> | When set to no-downgrade, pnpm will fail if a package's trust level has decreased compared to previous releases. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.trustPolicyExclude">trustPolicyExclude</a></code> | <code>string[]</code> | You can now list one or more specific packages or versions that pnpm should allow to install, even if those packages don't satisfy the trust policy requirement. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.trustPolicyIgnoreAfter">trustPolicyIgnoreAfter</a></code> | <code>number</code> | Allows ignoring the trust policy check for packages published more than the specified number of minutes ago. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.unsafePerm">unsafePerm</a></code> | <code>boolean</code> | Set to true to enable UID/GID switching when running package scripts. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.updateConfig">updateConfig</a></code> | <code><a href="#@alma-cdk/construct-library.UpdateConfig">UpdateConfig</a></code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.updateNotifier">updateNotifier</a></code> | <code>boolean</code> | When true, pnpm will check for updates to the installed packages and notify the user. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.useBetaCli">useBetaCli</a></code> | <code>boolean</code> | Experimental option that enables beta features of the CLI. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.useNodeVersion">useNodeVersion</a></code> | <code>string</code> | Specifies which exact Node.js version should be used for the project's runtime. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.useStderr">useStderr</a></code> | <code>boolean</code> | When true, all the output is written to stderr. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.verifyDepsBeforeRun">verifyDepsBeforeRun</a></code> | <code>boolean \| string</code> | This setting allows the checking of the state of dependencies before running scripts. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.verifyStoreIntegrity">verifyStoreIntegrity</a></code> | <code>boolean</code> | By default, if a file in the store has been modified, the content of this file is checked before linking it to a project's node_modules. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.virtualStoreDir">virtualStoreDir</a></code> | <code>string</code> | The directory with links to the store. |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.virtualStoreDirMaxLength">virtualStoreDirMaxLength</a></code> | <code>number</code> | Sets the maximum allowed length of directory names inside the virtual store directory (node_modules/.pnpm). |
| <code><a href="#@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.workspaceConcurrency">workspaceConcurrency</a></code> | <code>number</code> | Set the maximum number of tasks to run simultaneously. |

---

##### `allowBuilds`<sup>Optional</sup> <a name="allowBuilds" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.allowBuilds"></a>

```typescript
public readonly allowBuilds: {[ key: string ]: boolean};
```

- *Type:* {[ key: string ]: boolean}

A map of package matchers to explicitly allow (`true`) or disallow (`false`) script execution.

This field replaces `onlyBuiltDependencies` and `ignoredBuiltDependencies` (which are also deprecated by this new setting), providing a single source of truth.

---

##### `allowedDeprecatedVersions`<sup>Optional</sup> <a name="allowedDeprecatedVersions" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.allowedDeprecatedVersions"></a>

```typescript
public readonly allowedDeprecatedVersions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of deprecated versions that the warnings are suppressed.

---

##### `allowNonAppliedPatches`<sup>Optional</sup> <a name="allowNonAppliedPatches" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.allowNonAppliedPatches"></a>

```typescript
public readonly allowNonAppliedPatches: boolean;
```

- *Type:* boolean

When true, installation won't fail if some of the patches from the "patchedDependencies" field were not applied.

---

##### `allowUnusedPatches`<sup>Optional</sup> <a name="allowUnusedPatches" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.allowUnusedPatches"></a>

```typescript
public readonly allowUnusedPatches: boolean;
```

- *Type:* boolean

When true, installation won't fail if some of the patches from the "patchedDependencies" field were not applied.

(Previously named "allowNonAppliedPatches")

---

##### `auditConfig`<sup>Optional</sup> <a name="auditConfig" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.auditConfig"></a>

```typescript
public readonly auditConfig: AuditConfig;
```

- *Type:* <a href="#@alma-cdk/construct-library.AuditConfig">AuditConfig</a>

---

##### `auditLevel`<sup>Optional</sup> <a name="auditLevel" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.auditLevel"></a>

```typescript
public readonly auditLevel: string;
```

- *Type:* string

Controls the level of issues reported by `pnpm audit`.

When set to 'low', all vulnerabilities are reported. When set to 'moderate', 'high', or 'critical', only vulnerabilities with that severity or higher are reported.

---

##### `autoInstallPeers`<sup>Optional</sup> <a name="autoInstallPeers" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.autoInstallPeers"></a>

```typescript
public readonly autoInstallPeers: boolean;
```

- *Type:* boolean

When true, any missing non-optional peer dependencies are automatically installed.

---

##### `blockExoticSubdeps`<sup>Optional</sup> <a name="blockExoticSubdeps" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.blockExoticSubdeps"></a>

```typescript
public readonly blockExoticSubdeps: boolean;
```

- *Type:* boolean

When set to true, it prevents the resolution of exotic protocols (like git+ssh: or direct https: tarballs) in transitive dependencies.

Only direct dependencies are allowed to use exotic sources.

---

##### `ca`<sup>Optional</sup> <a name="ca" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ca"></a>

```typescript
public readonly ca: string;
```

- *Type:* string

The Certificate Authority signing certificate that is trusted for SSL connections to the registry.

---

##### `cacheDir`<sup>Optional</sup> <a name="cacheDir" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.cacheDir"></a>

```typescript
public readonly cacheDir: string;
```

- *Type:* string

The location of the cache (package metadata and dlx).

---

##### `cafile`<sup>Optional</sup> <a name="cafile" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.cafile"></a>

```typescript
public readonly cafile: string;
```

- *Type:* string

A path to a file containing one or multiple Certificate Authority signing certificates.

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.catalog"></a>

```typescript
public readonly catalog: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `catalogMode`<sup>Optional</sup> <a name="catalogMode" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.catalogMode"></a>

```typescript
public readonly catalogMode: string;
```

- *Type:* string

Controlling if and how dependencies are added to the default catalog.

---

##### `catalogs`<sup>Optional</sup> <a name="catalogs" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.catalogs"></a>

```typescript
public readonly catalogs: {[ key: string ]: {[ key: string ]: string}};
```

- *Type:* {[ key: string ]: {[ key: string ]: string}}

Define arbitrarily named catalogs.

---

##### `cert`<sup>Optional</sup> <a name="cert" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.cert"></a>

```typescript
public readonly cert: string;
```

- *Type:* string

A client certificate to pass when accessing the registry.

---

##### `childConcurrency`<sup>Optional</sup> <a name="childConcurrency" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.childConcurrency"></a>

```typescript
public readonly childConcurrency: number;
```

- *Type:* number

The maximum number of child processes to allocate simultaneously to build node_modules.

---

##### `cleanupUnusedCatalogs`<sup>Optional</sup> <a name="cleanupUnusedCatalogs" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.cleanupUnusedCatalogs"></a>

```typescript
public readonly cleanupUnusedCatalogs: boolean;
```

- *Type:* boolean

When set to `true`, pnpm will remove unused catalog entries during installation.

---

##### `color`<sup>Optional</sup> <a name="color" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.color"></a>

```typescript
public readonly color: string;
```

- *Type:* string

Controls colors in the output.

---

##### `configDependencies`<sup>Optional</sup> <a name="configDependencies" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.configDependencies"></a>

```typescript
public readonly configDependencies: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Config dependencies allow you to share and centralize configuration files, settings, and hooks across multiple projects.

They are installed before all regular dependencies ('dependencies', 'devDependencies', 'optionalDependencies'), making them ideal for setting up custom hooks, patches, and catalog entries.

---

##### `dangerouslyAllowAllBuilds`<sup>Optional</sup> <a name="dangerouslyAllowAllBuilds" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.dangerouslyAllowAllBuilds"></a>

```typescript
public readonly dangerouslyAllowAllBuilds: boolean;
```

- *Type:* boolean

If set to true, all build scripts (e.g. preinstall, install, postinstall) from dependencies will run automatically, without requiring approval.

---

##### `dedupeDirectDeps`<sup>Optional</sup> <a name="dedupeDirectDeps" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.dedupeDirectDeps"></a>

```typescript
public readonly dedupeDirectDeps: boolean;
```

- *Type:* boolean

When set to true, dependencies that are already symlinked to the root node_modules directory of the workspace will not be symlinked to subproject node_modules directories.

---

##### `dedupeInjectedDeps`<sup>Optional</sup> <a name="dedupeInjectedDeps" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.dedupeInjectedDeps"></a>

```typescript
public readonly dedupeInjectedDeps: boolean;
```

- *Type:* boolean

When this setting is enabled, dependencies that are injected will be symlinked from the workspace whenever possible.

---

##### `dedupePeerDependents`<sup>Optional</sup> <a name="dedupePeerDependents" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.dedupePeerDependents"></a>

```typescript
public readonly dedupePeerDependents: boolean;
```

- *Type:* boolean

When this setting is set to true, packages with peer dependencies will be deduplicated after peers resolution.

---

##### `deployAllFiles`<sup>Optional</sup> <a name="deployAllFiles" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.deployAllFiles"></a>

```typescript
public readonly deployAllFiles: boolean;
```

- *Type:* boolean

When deploying a package or installing a local package, all files of the package are copied.

---

##### `disallowWorkspaceCycles`<sup>Optional</sup> <a name="disallowWorkspaceCycles" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.disallowWorkspaceCycles"></a>

```typescript
public readonly disallowWorkspaceCycles: boolean;
```

- *Type:* boolean

When set to true, installation will fail if the workspace has cycles.

---

##### `dlxCacheMaxAge`<sup>Optional</sup> <a name="dlxCacheMaxAge" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.dlxCacheMaxAge"></a>

```typescript
public readonly dlxCacheMaxAge: number;
```

- *Type:* number

The time in minutes after which dlx cache expires.

---

##### `enableGlobalVirtualStore`<sup>Optional</sup> <a name="enableGlobalVirtualStore" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.enableGlobalVirtualStore"></a>

```typescript
public readonly enableGlobalVirtualStore: boolean;
```

- *Type:* boolean

When enabled, node_modules contains only symlinks to a central virtual store, rather than to node_modules/.pnpm.

---

##### `enableModulesDir`<sup>Optional</sup> <a name="enableModulesDir" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.enableModulesDir"></a>

```typescript
public readonly enableModulesDir: boolean;
```

- *Type:* boolean

When false, pnpm will not write any files to the modules directory (node_modules).

---

##### `enablePrePostScripts`<sup>Optional</sup> <a name="enablePrePostScripts" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.enablePrePostScripts"></a>

```typescript
public readonly enablePrePostScripts: boolean;
```

- *Type:* boolean

When true, pnpm will run any pre/post scripts automatically.

---

##### `engineStrict`<sup>Optional</sup> <a name="engineStrict" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.engineStrict"></a>

```typescript
public readonly engineStrict: boolean;
```

- *Type:* boolean

If this is enabled, pnpm will not install any package that claims to not be compatible with the current Node version.

---

##### `executionEnv`<sup>Optional</sup> <a name="executionEnv" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.executionEnv"></a>

```typescript
public readonly executionEnv: ExecutionEnv;
```

- *Type:* <a href="#@alma-cdk/construct-library.ExecutionEnv">ExecutionEnv</a>

---

##### `extendNodePath`<sup>Optional</sup> <a name="extendNodePath" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.extendNodePath"></a>

```typescript
public readonly extendNodePath: boolean;
```

- *Type:* boolean

When false, the NODE_PATH environment variable is not set in the command shims.

---

##### `failIfNoMatch`<sup>Optional</sup> <a name="failIfNoMatch" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.failIfNoMatch"></a>

```typescript
public readonly failIfNoMatch: boolean;
```

- *Type:* boolean

If true, pnpm will fail if no packages match the filter.

---

##### `fetchRetries`<sup>Optional</sup> <a name="fetchRetries" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.fetchRetries"></a>

```typescript
public readonly fetchRetries: number;
```

- *Type:* number

How many times to retry if pnpm fails to fetch from the registry.

---

##### `fetchRetryFactor`<sup>Optional</sup> <a name="fetchRetryFactor" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.fetchRetryFactor"></a>

```typescript
public readonly fetchRetryFactor: number;
```

- *Type:* number

The exponential factor for retry backoff.

---

##### `fetchRetryMaxtimeout`<sup>Optional</sup> <a name="fetchRetryMaxtimeout" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.fetchRetryMaxtimeout"></a>

```typescript
public readonly fetchRetryMaxtimeout: number;
```

- *Type:* number

The maximum fallback timeout to ensure the retry factor does not make requests too long.

---

##### `fetchRetryMintimeout`<sup>Optional</sup> <a name="fetchRetryMintimeout" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.fetchRetryMintimeout"></a>

```typescript
public readonly fetchRetryMintimeout: number;
```

- *Type:* number

The minimum (base) timeout for retrying requests.

---

##### `fetchTimeout`<sup>Optional</sup> <a name="fetchTimeout" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.fetchTimeout"></a>

```typescript
public readonly fetchTimeout: number;
```

- *Type:* number

The maximum amount of time to wait for HTTP requests to complete.

---

##### `forceLegacyDeploy`<sup>Optional</sup> <a name="forceLegacyDeploy" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.forceLegacyDeploy"></a>

```typescript
public readonly forceLegacyDeploy: boolean;
```

- *Type:* boolean

By default, pnpm deploy will try creating a dedicated lockfile from a shared lockfile for deployment.

If this setting is set to true, the legacy deploy behavior will be used.

---

##### `gitBranchLockfile`<sup>Optional</sup> <a name="gitBranchLockfile" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.gitBranchLockfile"></a>

```typescript
public readonly gitBranchLockfile: boolean;
```

- *Type:* boolean

When set to true, the generated lockfile name after installation will be named based on the current branch name to completely avoid merge conflicts.

---

##### `gitChecks`<sup>Optional</sup> <a name="gitChecks" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.gitChecks"></a>

```typescript
public readonly gitChecks: boolean;
```

- *Type:* boolean

Check if current branch is your publish branch, clean, and up-to-date with remote.

---

##### `gitShallowHosts`<sup>Optional</sup> <a name="gitShallowHosts" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.gitShallowHosts"></a>

```typescript
public readonly gitShallowHosts: string[];
```

- *Type:* string[]

When fetching dependencies that are Git repositories, if the host is listed in this setting, pnpm will use shallow cloning to fetch only the needed commit, not all the history.

---

##### `globalBinDir`<sup>Optional</sup> <a name="globalBinDir" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.globalBinDir"></a>

```typescript
public readonly globalBinDir: string;
```

- *Type:* string

Allows to set the target directory for the bin files of globally installed packages.

---

##### `globalDir`<sup>Optional</sup> <a name="globalDir" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.globalDir"></a>

```typescript
public readonly globalDir: string;
```

- *Type:* string

Specify a custom directory to store global packages.

---

##### `globalPnpmfile`<sup>Optional</sup> <a name="globalPnpmfile" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.globalPnpmfile"></a>

```typescript
public readonly globalPnpmfile: string;
```

- *Type:* string

The location of a global pnpmfile.

A global pnpmfile is used by all projects during installation.

---

##### `hoist`<sup>Optional</sup> <a name="hoist" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.hoist"></a>

```typescript
public readonly hoist: boolean;
```

- *Type:* boolean

When true, all dependencies are hoisted to node_modules/.pnpm/node_modules.

---

##### `hoistPattern`<sup>Optional</sup> <a name="hoistPattern" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.hoistPattern"></a>

```typescript
public readonly hoistPattern: string[];
```

- *Type:* string[]

Tells pnpm which packages should be hoisted to node_modules/.pnpm/node_modules.

---

##### `hoistWorkspacePackages`<sup>Optional</sup> <a name="hoistWorkspacePackages" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.hoistWorkspacePackages"></a>

```typescript
public readonly hoistWorkspacePackages: boolean;
```

- *Type:* boolean

When true, packages from the workspaces are symlinked to either <workspace_root>/node_modules/.pnpm/node_modules or to <workspace_root>/node_modules depending on other hoisting settings (hoistPattern and publicHoistPattern).

---

##### `httpsProxy`<sup>Optional</sup> <a name="httpsProxy" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.httpsProxy"></a>

```typescript
public readonly httpsProxy: string;
```

- *Type:* string

A proxy to use for outgoing HTTPS requests.

If the HTTPS_PROXY, https_proxy, HTTP_PROXY or http_proxy environment variables are set, their values will be used instead.

---

##### `ignoreCompatibilityDb`<sup>Optional</sup> <a name="ignoreCompatibilityDb" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoreCompatibilityDb"></a>

```typescript
public readonly ignoreCompatibilityDb: boolean;
```

- *Type:* boolean

During installation the dependencies of some packages are automatically patched.

If you want to disable this, set this config to false.

---

##### `ignoredBuiltDependencies`<sup>Optional</sup> <a name="ignoredBuiltDependencies" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoredBuiltDependencies"></a>

```typescript
public readonly ignoredBuiltDependencies: string[];
```

- *Type:* string[]

A list of package names that should not be built during installation.

---

##### `ignoreDepScripts`<sup>Optional</sup> <a name="ignoreDepScripts" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoreDepScripts"></a>

```typescript
public readonly ignoreDepScripts: boolean;
```

- *Type:* boolean

Do not execute any scripts of the installed packages.

Scripts of the projects are executed.

---

##### `ignoredOptionalDependencies`<sup>Optional</sup> <a name="ignoredOptionalDependencies" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoredOptionalDependencies"></a>

```typescript
public readonly ignoredOptionalDependencies: string[];
```

- *Type:* string[]

A list of optional dependencies that the install should be skipped.

---

##### `ignorePatchFailures`<sup>Optional</sup> <a name="ignorePatchFailures" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignorePatchFailures"></a>

```typescript
public readonly ignorePatchFailures: boolean;
```

- *Type:* boolean

Default is undefined.

Errors out when a patch with an exact version or version range fails. Ignores failures from name-only patches. When true, prints a warning instead of failing when any patch cannot be applied. When false, errors out for any patch failure.

---

##### `ignorePnpmfile`<sup>Optional</sup> <a name="ignorePnpmfile" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignorePnpmfile"></a>

```typescript
public readonly ignorePnpmfile: boolean;
```

- *Type:* boolean

.pnpmfile.cjs will be ignored. Useful together with --ignore-scripts when you want to make sure that no script gets executed during install.

---

##### `ignoreScripts`<sup>Optional</sup> <a name="ignoreScripts" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoreScripts"></a>

```typescript
public readonly ignoreScripts: boolean;
```

- *Type:* boolean

Do not execute any scripts defined in the project package.json and its dependencies.

---

##### `ignoreWorkspaceCycles`<sup>Optional</sup> <a name="ignoreWorkspaceCycles" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoreWorkspaceCycles"></a>

```typescript
public readonly ignoreWorkspaceCycles: boolean;
```

- *Type:* boolean

When set to true, no workspace cycle warnings will be printed.

---

##### `ignoreWorkspaceRootCheck`<sup>Optional</sup> <a name="ignoreWorkspaceRootCheck" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.ignoreWorkspaceRootCheck"></a>

```typescript
public readonly ignoreWorkspaceRootCheck: boolean;
```

- *Type:* boolean

Adding a new dependency to the root workspace package fails, unless the --ignore-workspace-root-check or -w flag is used.

---

##### `includeWorkspaceRoot`<sup>Optional</sup> <a name="includeWorkspaceRoot" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.includeWorkspaceRoot"></a>

```typescript
public readonly includeWorkspaceRoot: boolean;
```

- *Type:* boolean

When executing commands recursively in a workspace, execute them on the root workspace project as well.

---

##### `injectWorkspacePackages`<sup>Optional</sup> <a name="injectWorkspacePackages" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.injectWorkspacePackages"></a>

```typescript
public readonly injectWorkspacePackages: boolean;
```

- *Type:* boolean

Enables hard-linking of all local workspace dependencies instead of symlinking them.

---

##### `key`<sup>Optional</sup> <a name="key" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A client key to pass when accessing the registry.

---

##### `linkWorkspacePackages`<sup>Optional</sup> <a name="linkWorkspacePackages" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.linkWorkspacePackages"></a>

```typescript
public readonly linkWorkspacePackages: boolean | string;
```

- *Type:* boolean | string

If this is enabled, locally available packages are linked to node_modules instead of being downloaded from the registry.

---

##### `localAddress`<sup>Optional</sup> <a name="localAddress" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.localAddress"></a>

```typescript
public readonly localAddress: string;
```

- *Type:* string

The IP address of the local interface to use when making connections to the npm registry.

---

##### `lockfile`<sup>Optional</sup> <a name="lockfile" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.lockfile"></a>

```typescript
public readonly lockfile: boolean;
```

- *Type:* boolean

When set to false, pnpm won't read or generate a pnpm-lock.yaml file.

---

##### `lockfileIncludeTarballUrl`<sup>Optional</sup> <a name="lockfileIncludeTarballUrl" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.lockfileIncludeTarballUrl"></a>

```typescript
public readonly lockfileIncludeTarballUrl: boolean;
```

- *Type:* boolean

Add the full URL to the package's tarball to every entry in pnpm-lock.yaml.

---

##### `loglevel`<sup>Optional</sup> <a name="loglevel" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.loglevel"></a>

```typescript
public readonly loglevel: string;
```

- *Type:* string

Any logs at or higher than the given level will be shown.

---

##### `managePackageManagerVersions`<sup>Optional</sup> <a name="managePackageManagerVersions" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.managePackageManagerVersions"></a>

```typescript
public readonly managePackageManagerVersions: boolean;
```

- *Type:* boolean

When enabled, pnpm will automatically download and run the version of pnpm specified in the packageManager field of package.json.

---

##### `maxsockets`<sup>Optional</sup> <a name="maxsockets" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.maxsockets"></a>

```typescript
public readonly maxsockets: number;
```

- *Type:* number

The maximum number of connections to use per origin (protocol/host/port combination).

---

##### `mergeGitBranchLockfilesBranchPattern`<sup>Optional</sup> <a name="mergeGitBranchLockfilesBranchPattern" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.mergeGitBranchLockfilesBranchPattern"></a>

```typescript
public readonly mergeGitBranchLockfilesBranchPattern: string[];
```

- *Type:* string[]

This configuration matches the current branch name to determine whether to merge all git branch lockfile files.

---

##### `minimumReleaseAge`<sup>Optional</sup> <a name="minimumReleaseAge" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.minimumReleaseAge"></a>

```typescript
public readonly minimumReleaseAge: number;
```

- *Type:* number

minimumReleaseAge defines the minimum number of minutes that must pass after a version is published before pnpm will install it.

This applies to all dependencies, including transitive ones.

---

##### `minimumReleaseAgeExclude`<sup>Optional</sup> <a name="minimumReleaseAgeExclude" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.minimumReleaseAgeExclude"></a>

```typescript
public readonly minimumReleaseAgeExclude: string[];
```

- *Type:* string[]

If you set `minimumReleaseAge` but need certain dependencies to always install the newest version immediately, you can list them under `minimumReleaseAgeExclude`.

The exclusion works by `package name` and applies to all versions of that package.

---

##### `modulesCacheMaxAge`<sup>Optional</sup> <a name="modulesCacheMaxAge" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.modulesCacheMaxAge"></a>

```typescript
public readonly modulesCacheMaxAge: number;
```

- *Type:* number

The time in minutes after which orphan packages from the modules directory should be removed.

---

##### `modulesDir`<sup>Optional</sup> <a name="modulesDir" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.modulesDir"></a>

```typescript
public readonly modulesDir: string;
```

- *Type:* string

The directory in which dependencies will be installed (instead of node_modules).

---

##### `networkConcurrency`<sup>Optional</sup> <a name="networkConcurrency" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.networkConcurrency"></a>

```typescript
public readonly networkConcurrency: number;
```

- *Type:* number

Controls the maximum number of HTTP(S) requests to process simultaneously.

---

##### `neverBuiltDependencies`<sup>Optional</sup> <a name="neverBuiltDependencies" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.neverBuiltDependencies"></a>

```typescript
public readonly neverBuiltDependencies: string[];
```

- *Type:* string[]

A list of dependencies to run builds for.

---

##### `nodeLinker`<sup>Optional</sup> <a name="nodeLinker" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.nodeLinker"></a>

```typescript
public readonly nodeLinker: string;
```

- *Type:* string

Defines what linker should be used for installing Node packages.

---

##### `nodeOptions`<sup>Optional</sup> <a name="nodeOptions" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.nodeOptions"></a>

```typescript
public readonly nodeOptions: string;
```

- *Type:* string

Options to pass through to Node.js via the NODE_OPTIONS environment variable.

---

##### `nodeVersion`<sup>Optional</sup> <a name="nodeVersion" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.nodeVersion"></a>

```typescript
public readonly nodeVersion: string;
```

- *Type:* string

The Node.js version to use when checking a package's engines setting.

---

##### `noproxy`<sup>Optional</sup> <a name="noproxy" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.noproxy"></a>

```typescript
public readonly noproxy: string;
```

- *Type:* string

A comma-separated string of domain extensions that a proxy should not be used for.

---

##### `npmPath`<sup>Optional</sup> <a name="npmPath" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.npmPath"></a>

```typescript
public readonly npmPath: string;
```

- *Type:* string

The location of the npm binary that pnpm uses for some actions, like publishing.

---

##### `onlyBuiltDependencies`<sup>Optional</sup> <a name="onlyBuiltDependencies" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.onlyBuiltDependencies"></a>

```typescript
public readonly onlyBuiltDependencies: string[];
```

- *Type:* string[]

A list of package names that are allowed to be executed during installation.

---

##### `onlyBuiltDependenciesFile`<sup>Optional</sup> <a name="onlyBuiltDependenciesFile" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.onlyBuiltDependenciesFile"></a>

```typescript
public readonly onlyBuiltDependenciesFile: string;
```

- *Type:* string

Specifies a JSON file that lists the only packages permitted to run installation scripts during the pnpm install process.

---

##### `optimisticRepeatInstall`<sup>Optional</sup> <a name="optimisticRepeatInstall" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.optimisticRepeatInstall"></a>

```typescript
public readonly optimisticRepeatInstall: boolean;
```

- *Type:* boolean

When enabled, a fast check will be performed before proceeding to installation.

This way a repeat install or an install on a project with everything up-to-date becomes a lot faster.

---

##### `overrides`<sup>Optional</sup> <a name="overrides" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.overrides"></a>

```typescript
public readonly overrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Used to override any dependency in the dependency graph.

---

##### `packageExtensions`<sup>Optional</sup> <a name="packageExtensions" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.packageExtensions"></a>

```typescript
public readonly packageExtensions: {[ key: string ]: PackageExtension};
```

- *Type:* {[ key: string ]: <a href="#@alma-cdk/construct-library.PackageExtension">PackageExtension</a>}

Used to extend the existing package definitions with additional information.

---

##### `packageImportMethod`<sup>Optional</sup> <a name="packageImportMethod" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.packageImportMethod"></a>

```typescript
public readonly packageImportMethod: string;
```

- *Type:* string

Controls the way packages are imported from the store (if you want to disable symlinks inside node_modules, then you need to change the nodeLinker setting, not this one).

---

##### `packageManagerStrict`<sup>Optional</sup> <a name="packageManagerStrict" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.packageManagerStrict"></a>

```typescript
public readonly packageManagerStrict: boolean;
```

- *Type:* boolean

If this setting is disabled, pnpm will not fail if a different package manager is specified in the packageManager field of package.json. When enabled, only the package name is checked (since pnpm v9.2.0), so you can still run any version of pnpm regardless of the version specified in the packageManager field.

---

##### `packageManagerStrictVersion`<sup>Optional</sup> <a name="packageManagerStrictVersion" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.packageManagerStrictVersion"></a>

```typescript
public readonly packageManagerStrictVersion: boolean;
```

- *Type:* boolean

When enabled, pnpm will fail if its version doesn't exactly match the version specified in the packageManager field of package.json.

---

##### `packages`<sup>Optional</sup> <a name="packages" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.packages"></a>

```typescript
public readonly packages: string[];
```

- *Type:* string[]

Workspace package paths.

Glob patterns are supported

---

##### `patchedDependencies`<sup>Optional</sup> <a name="patchedDependencies" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.patchedDependencies"></a>

```typescript
public readonly patchedDependencies: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A list of dependencies that are patched.

---

##### `patchesDir`<sup>Optional</sup> <a name="patchesDir" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.patchesDir"></a>

```typescript
public readonly patchesDir: string;
```

- *Type:* string

The generated patch file will be saved to this directory.

---

##### `peerDependencyRules`<sup>Optional</sup> <a name="peerDependencyRules" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.peerDependencyRules"></a>

```typescript
public readonly peerDependencyRules: PeerDependencyRules;
```

- *Type:* <a href="#@alma-cdk/construct-library.PeerDependencyRules">PeerDependencyRules</a>

---

##### `peersSuffixMaxLength`<sup>Optional</sup> <a name="peersSuffixMaxLength" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.peersSuffixMaxLength"></a>

```typescript
public readonly peersSuffixMaxLength: number;
```

- *Type:* number

Max length of the peer IDs suffix added to dependency keys in the lockfile.

If the suffix is longer, it is replaced with a hash.

---

##### `pnpmfile`<sup>Optional</sup> <a name="pnpmfile" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.pnpmfile"></a>

```typescript
public readonly pnpmfile: string;
```

- *Type:* string

The location of the local pnpmfile.

---

##### `preferFrozenLockfile`<sup>Optional</sup> <a name="preferFrozenLockfile" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.preferFrozenLockfile"></a>

```typescript
public readonly preferFrozenLockfile: boolean;
```

- *Type:* boolean

When set to true and the available pnpm-lock.yaml satisfies the package.json dependencies directive, a headless installation is performed.

---

##### `preferOffline`<sup>Optional</sup> <a name="preferOffline" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.preferOffline"></a>

```typescript
public readonly preferOffline: boolean;
```

- *Type:* boolean

Bypass staleness checks for cached data.

Missing data will still be requested from the server.

---

##### `preferSymlinkedExecutables`<sup>Optional</sup> <a name="preferSymlinkedExecutables" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.preferSymlinkedExecutables"></a>

```typescript
public readonly preferSymlinkedExecutables: boolean;
```

- *Type:* boolean

Create symlinks to executables in node_modules/.bin instead of command shims. This setting is ignored on Windows, where only command shims work.

---

##### `preferWorkspacePackages`<sup>Optional</sup> <a name="preferWorkspacePackages" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.preferWorkspacePackages"></a>

```typescript
public readonly preferWorkspacePackages: boolean;
```

- *Type:* boolean

If this is enabled, local packages from the workspace are preferred over packages from the registry, even if there is a newer version of the package in the registry.

---

##### `proxy`<sup>Optional</sup> <a name="proxy" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.proxy"></a>

```typescript
public readonly proxy: string;
```

- *Type:* string

A proxy to use for outgoing http requests.

If the HTTP_PROXY or http_proxy environment variables are set, proxy settings will be honored by the underlying request library.

---

##### `publicHoistPattern`<sup>Optional</sup> <a name="publicHoistPattern" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.publicHoistPattern"></a>

```typescript
public readonly publicHoistPattern: string[];
```

- *Type:* string[]

Unlike hoistPattern, which hoists dependencies to a hidden modules directory inside the virtual store, publicHoistPattern hoists dependencies matching the pattern to the root modules directory.

---

##### `publishBranch`<sup>Optional</sup> <a name="publishBranch" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.publishBranch"></a>

```typescript
public readonly publishBranch: string;
```

- *Type:* string

The primary branch of the repository which is used for publishing the latest changes.

---

##### `recursiveInstall`<sup>Optional</sup> <a name="recursiveInstall" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.recursiveInstall"></a>

```typescript
public readonly recursiveInstall: boolean;
```

- *Type:* boolean

If this is enabled, the primary behaviour of pnpm install becomes that of pnpm install -r, meaning the install is performed on all workspace or subdirectory packages.

---

##### `registry`<sup>Optional</sup> <a name="registry" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.registry"></a>

```typescript
public readonly registry: string;
```

- *Type:* string

The base URL of the npm package registry (trailing slash included).

---

##### `registrySupportsTimeField`<sup>Optional</sup> <a name="registrySupportsTimeField" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.registrySupportsTimeField"></a>

```typescript
public readonly registrySupportsTimeField: boolean;
```

- *Type:* boolean

Set this to true if the registry that you are using returns the "time" field in the abbreviated metadata.

---

##### `requiredScripts`<sup>Optional</sup> <a name="requiredScripts" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.requiredScripts"></a>

```typescript
public readonly requiredScripts: string[];
```

- *Type:* string[]

A list of scripts that must exist in each project.

---

##### `resolutionMode`<sup>Optional</sup> <a name="resolutionMode" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.resolutionMode"></a>

```typescript
public readonly resolutionMode: string;
```

- *Type:* string

Determines how pnpm resolves dependencies, See https://pnpm.io/settings#resolutionmode.

---

##### `resolvePeersFromWorkspaceRoot`<sup>Optional</sup> <a name="resolvePeersFromWorkspaceRoot" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.resolvePeersFromWorkspaceRoot"></a>

```typescript
public readonly resolvePeersFromWorkspaceRoot: boolean;
```

- *Type:* boolean

When enabled, dependencies of the root workspace project are used to resolve peer dependencies of any projects in the workspace.

---

##### `saveExact`<sup>Optional</sup> <a name="saveExact" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.saveExact"></a>

```typescript
public readonly saveExact: boolean;
```

- *Type:* boolean

Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator.

---

##### `savePrefix`<sup>Optional</sup> <a name="savePrefix" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.savePrefix"></a>

```typescript
public readonly savePrefix: string;
```

- *Type:* string

Configure how versions of packages installed to a package.json file get prefixed.

---

##### `saveWorkspaceProtocol`<sup>Optional</sup> <a name="saveWorkspaceProtocol" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.saveWorkspaceProtocol"></a>

```typescript
public readonly saveWorkspaceProtocol: boolean | string;
```

- *Type:* boolean | string

This setting controls how dependencies that are linked from the workspace are added to package.json.

---

##### `scriptShell`<sup>Optional</sup> <a name="scriptShell" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.scriptShell"></a>

```typescript
public readonly scriptShell: string;
```

- *Type:* string

The shell to use for scripts run with the pnpm run command.

---

##### `shamefullyHoist`<sup>Optional</sup> <a name="shamefullyHoist" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.shamefullyHoist"></a>

```typescript
public readonly shamefullyHoist: boolean;
```

- *Type:* boolean

By default, pnpm creates a semistrict node_modules, meaning dependencies have access to undeclared dependencies but modules outside of node_modules do not.

---

##### `sharedWorkspaceLockfile`<sup>Optional</sup> <a name="sharedWorkspaceLockfile" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.sharedWorkspaceLockfile"></a>

```typescript
public readonly sharedWorkspaceLockfile: boolean;
```

- *Type:* boolean

If this is enabled, pnpm creates a single pnpm-lock.yaml file in the root of the workspace.

---

##### `shellEmulator`<sup>Optional</sup> <a name="shellEmulator" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.shellEmulator"></a>

```typescript
public readonly shellEmulator: boolean;
```

- *Type:* boolean

When true, pnpm will use a JavaScript implementation of a bash-like shell to execute scripts.

---

##### `sideEffectsCache`<sup>Optional</sup> <a name="sideEffectsCache" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.sideEffectsCache"></a>

```typescript
public readonly sideEffectsCache: boolean;
```

- *Type:* boolean

Use and cache the results of (pre/post)install hooks.

---

##### `sideEffectsCacheReadonly`<sup>Optional</sup> <a name="sideEffectsCacheReadonly" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.sideEffectsCacheReadonly"></a>

```typescript
public readonly sideEffectsCacheReadonly: boolean;
```

- *Type:* boolean

Only use the side effects cache if present, do not create it for new packages.

---

##### `stateDir`<sup>Optional</sup> <a name="stateDir" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.stateDir"></a>

```typescript
public readonly stateDir: string;
```

- *Type:* string

The location where all the packages are saved on the disk.

---

##### `storeDir`<sup>Optional</sup> <a name="storeDir" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.storeDir"></a>

```typescript
public readonly storeDir: string;
```

- *Type:* string

The location where all the packages are saved on the disk.

---

##### `strictDepBuilds`<sup>Optional</sup> <a name="strictDepBuilds" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.strictDepBuilds"></a>

```typescript
public readonly strictDepBuilds: boolean;
```

- *Type:* boolean

When strictDepBuilds is enabled, the installation will exit with a non-zero exit code if any dependencies have unreviewed build scripts (aka postinstall scripts).

---

##### `strictPeerDependencies`<sup>Optional</sup> <a name="strictPeerDependencies" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.strictPeerDependencies"></a>

```typescript
public readonly strictPeerDependencies: boolean;
```

- *Type:* boolean

If this is enabled, commands will fail if there is a missing or invalid peer dependency in the tree.

---

##### `strictSsl`<sup>Optional</sup> <a name="strictSsl" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.strictSsl"></a>

```typescript
public readonly strictSsl: boolean;
```

- *Type:* boolean

Whether or not to do SSL key validation when making requests to the registry via HTTPS.

---

##### `strictStorePkgContentCheck`<sup>Optional</sup> <a name="strictStorePkgContentCheck" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.strictStorePkgContentCheck"></a>

```typescript
public readonly strictStorePkgContentCheck: boolean;
```

- *Type:* boolean

Some registries allow the exact same content to be published under different package names and/or versions.

---

##### `supportedArchitectures`<sup>Optional</sup> <a name="supportedArchitectures" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.supportedArchitectures"></a>

```typescript
public readonly supportedArchitectures: SupportedArchitectures;
```

- *Type:* <a href="#@alma-cdk/construct-library.SupportedArchitectures">SupportedArchitectures</a>

Specifies architectures for which you'd like to install optional dependencies, even if they don't match the architecture of the system running the install.

---

##### `symlink`<sup>Optional</sup> <a name="symlink" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.symlink"></a>

```typescript
public readonly symlink: boolean;
```

- *Type:* boolean

When symlink is set to false, pnpm creates a virtual store directory without any symlinks.

It is a useful setting together with nodeLinker=pnp.

---

##### `syncInjectedDepsAfterScripts`<sup>Optional</sup> <a name="syncInjectedDepsAfterScripts" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.syncInjectedDepsAfterScripts"></a>

```typescript
public readonly syncInjectedDepsAfterScripts: string[];
```

- *Type:* string[]

Injected workspace dependencies are collections of hardlinks, which don't add or remove the files when their sources change.

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

If you pnpm add a package and you don't provide a specific version, then it will install the package at the version registered under the tag from this setting.

---

##### `trustPolicy`<sup>Optional</sup> <a name="trustPolicy" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.trustPolicy"></a>

```typescript
public readonly trustPolicy: string;
```

- *Type:* string

When set to no-downgrade, pnpm will fail if a package's trust level has decreased compared to previous releases.

For example, if a package was previously published by a trusted publisher but now only has provenance or no trust evidence, installation will fail. This helps prevent installing potentially compromised versions.

---

##### `trustPolicyExclude`<sup>Optional</sup> <a name="trustPolicyExclude" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.trustPolicyExclude"></a>

```typescript
public readonly trustPolicyExclude: string[];
```

- *Type:* string[]

You can now list one or more specific packages or versions that pnpm should allow to install, even if those packages don't satisfy the trust policy requirement.

---

##### `trustPolicyIgnoreAfter`<sup>Optional</sup> <a name="trustPolicyIgnoreAfter" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.trustPolicyIgnoreAfter"></a>

```typescript
public readonly trustPolicyIgnoreAfter: number;
```

- *Type:* number

Allows ignoring the trust policy check for packages published more than the specified number of minutes ago.

This is useful when enabling strict trust policies, as it allows older versions of packages (which may lack a process for publishing with signatures or provenance) to be installed without manual exclusion, assuming they are safe due to their age.

---

##### `unsafePerm`<sup>Optional</sup> <a name="unsafePerm" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.unsafePerm"></a>

```typescript
public readonly unsafePerm: boolean;
```

- *Type:* boolean

Set to true to enable UID/GID switching when running package scripts.

If set explicitly to false, then installing as a non-root user will fail.

---

##### `updateConfig`<sup>Optional</sup> <a name="updateConfig" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.updateConfig"></a>

```typescript
public readonly updateConfig: UpdateConfig;
```

- *Type:* <a href="#@alma-cdk/construct-library.UpdateConfig">UpdateConfig</a>

---

##### `updateNotifier`<sup>Optional</sup> <a name="updateNotifier" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.updateNotifier"></a>

```typescript
public readonly updateNotifier: boolean;
```

- *Type:* boolean

When true, pnpm will check for updates to the installed packages and notify the user.

---

##### `useBetaCli`<sup>Optional</sup> <a name="useBetaCli" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.useBetaCli"></a>

```typescript
public readonly useBetaCli: boolean;
```

- *Type:* boolean

Experimental option that enables beta features of the CLI.

---

##### `useNodeVersion`<sup>Optional</sup> <a name="useNodeVersion" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.useNodeVersion"></a>

```typescript
public readonly useNodeVersion: string;
```

- *Type:* string

Specifies which exact Node.js version should be used for the project's runtime.

---

##### `useStderr`<sup>Optional</sup> <a name="useStderr" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.useStderr"></a>

```typescript
public readonly useStderr: boolean;
```

- *Type:* boolean

When true, all the output is written to stderr.

---

##### `verifyDepsBeforeRun`<sup>Optional</sup> <a name="verifyDepsBeforeRun" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.verifyDepsBeforeRun"></a>

```typescript
public readonly verifyDepsBeforeRun: boolean | string;
```

- *Type:* boolean | string

This setting allows the checking of the state of dependencies before running scripts.

---

##### `verifyStoreIntegrity`<sup>Optional</sup> <a name="verifyStoreIntegrity" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.verifyStoreIntegrity"></a>

```typescript
public readonly verifyStoreIntegrity: boolean;
```

- *Type:* boolean

By default, if a file in the store has been modified, the content of this file is checked before linking it to a project's node_modules.

---

##### `virtualStoreDir`<sup>Optional</sup> <a name="virtualStoreDir" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.virtualStoreDir"></a>

```typescript
public readonly virtualStoreDir: string;
```

- *Type:* string

The directory with links to the store.

---

##### `virtualStoreDirMaxLength`<sup>Optional</sup> <a name="virtualStoreDirMaxLength" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.virtualStoreDirMaxLength"></a>

```typescript
public readonly virtualStoreDirMaxLength: number;
```

- *Type:* number

Sets the maximum allowed length of directory names inside the virtual store directory (node_modules/.pnpm).

---

##### `workspaceConcurrency`<sup>Optional</sup> <a name="workspaceConcurrency" id="@alma-cdk/construct-library.PnpmWorkspaceSpecification.property.workspaceConcurrency"></a>

```typescript
public readonly workspaceConcurrency: number;
```

- *Type:* number

Set the maximum number of tasks to run simultaneously.

For unlimited concurrency use Infinity. You can set the value to <= 0 and it will use amount of CPU cores of the host minus the absolute value of the provided number as: max(1, (number of cores) - abs(workspaceConcurrency)).

---

### SupportedArchitectures <a name="SupportedArchitectures" id="@alma-cdk/construct-library.SupportedArchitectures"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/construct-library.SupportedArchitectures.Initializer"></a>

```typescript
import { SupportedArchitectures } from '@alma-cdk/construct-library'

const supportedArchitectures: SupportedArchitectures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.SupportedArchitectures.property.cpu">cpu</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.SupportedArchitectures.property.libc">libc</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@alma-cdk/construct-library.SupportedArchitectures.property.os">os</a></code> | <code>string[]</code> | *No description.* |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@alma-cdk/construct-library.SupportedArchitectures.property.cpu"></a>

```typescript
public readonly cpu: string[];
```

- *Type:* string[]

---

##### `libc`<sup>Optional</sup> <a name="libc" id="@alma-cdk/construct-library.SupportedArchitectures.property.libc"></a>

```typescript
public readonly libc: string[];
```

- *Type:* string[]

---

##### `os`<sup>Optional</sup> <a name="os" id="@alma-cdk/construct-library.SupportedArchitectures.property.os"></a>

```typescript
public readonly os: string[];
```

- *Type:* string[]

---

### UpdateConfig <a name="UpdateConfig" id="@alma-cdk/construct-library.UpdateConfig"></a>

#### Initializer <a name="Initializer" id="@alma-cdk/construct-library.UpdateConfig.Initializer"></a>

```typescript
import { UpdateConfig } from '@alma-cdk/construct-library'

const updateConfig: UpdateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@alma-cdk/construct-library.UpdateConfig.property.ignoreDependencies">ignoreDependencies</a></code> | <code>string[]</code> | *No description.* |

---

##### `ignoreDependencies`<sup>Optional</sup> <a name="ignoreDependencies" id="@alma-cdk/construct-library.UpdateConfig.property.ignoreDependencies"></a>

```typescript
public readonly ignoreDependencies: string[];
```

- *Type:* string[]

---



