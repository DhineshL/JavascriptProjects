class GitHub{
  constructor(){
    this.client_id = "319f6c443fbcbd4b52fb";
    this.client_secret = "8a053f5312a166ad778a51449596b657ee5fc518";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}