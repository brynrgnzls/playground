Link for the tutoral

- https://blog.logrocket.com/managing-full-stack-monorepo-pnpm/#full-stack-multi-package-monorepo

Notes:

- Monorepo single repository that contains multiple projects or packages that has a separate package.json
- Root should have a pnpm-workspace.yaml that contains has a package list that contains all the packes needed to be shared accross the repository
- To share packages among the other projects the root package.json should include the projects to beshared in the dependencies
- [pnpm --stram -r start:dev] ==> -r flag causes pnpm to run start:dev script to all packahes present in the workspace
 -[pnpm --stram -r start] ==> --stream enables streaming output mode which continously doisplays the full and interleaved output of the scripts for each package
- [pnpm --filter <nameOfThePakcge> run stat:dev] ===> runs a specific test script in a specified package
