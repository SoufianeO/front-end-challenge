export class Repo {
    constructor(public repoName: string, public description: string,
        public userName: string, public imagePath: string,
        public stars: number, public issues: number) {}
}
