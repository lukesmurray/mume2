mume2
=====

command line interface for the mume markdown converter.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mume2.svg)](https://npmjs.org/package/mume2)
[![CircleCI](https://circleci.com/gh/lukesmurray/mume2/tree/master.svg?style=shield)](https://circleci.com/gh/lukesmurray/mume2/tree/master)
[![Codecov](https://codecov.io/gh/lukesmurray/mume2/branch/master/graph/badge.svg)](https://codecov.io/gh/lukesmurray/mume2)
[![Downloads/week](https://img.shields.io/npm/dw/mume2.svg)](https://npmjs.org/package/mume2)
[![License](https://img.shields.io/npm/l/mume2.svg)](https://github.com/lukesmurray/mume2/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mume2
$ mume2 COMMAND
running command...
$ mume2 (-v|--version|version)
mume2/0.0.0 linux-x64 node-v11.1.0
$ mume2 --help [COMMAND]
USAGE
  $ mume2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mume2 goodbye [FILE]`](#mume-2-goodbye-file)
* [`mume2 hello [FILE]`](#mume-2-hello-file)
* [`mume2 help [COMMAND]`](#mume-2-help-command)
* [`mume2 html [FILE]`](#mume-2-html-file)

## `mume2 goodbye [FILE]`

describe the command here

```
USAGE
  $ mume2 goodbye [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/goodbye.ts](https://github.com/lukesmurray/mume2/blob/v0.0.0/src/commands/goodbye.ts)_

## `mume2 hello [FILE]`

describe the command here

```
USAGE
  $ mume2 hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ mume2 hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/lukesmurray/mume2/blob/v0.0.0/src/commands/hello.ts)_

## `mume2 help [COMMAND]`

display help for mume2

```
USAGE
  $ mume2 help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.4/src/commands/help.ts)_

## `mume2 html [FILE]`

describe the command here

```
USAGE
  $ mume2 html [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/html.ts](https://github.com/lukesmurray/mume2/blob/v0.0.0/src/commands/html.ts)_
<!-- commandsstop -->
