export class Repo {
    constructor(public RepositoryName: string, public description: string,
        public userName: string, public imagePath: string,
        public stars: number, public issues: number) {}
}
