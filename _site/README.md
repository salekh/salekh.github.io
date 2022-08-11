# Sanchit's Personal Webpage

This is the code repository for [Sanchit Alekh](http://sanchitalekh.in)'s webpage. It is based on [Hyde](https://github.com/poole/hyde), a brazen two-column [Jekyll](http://jekyllrb.com) theme that pairs a prominent sidebar with uncomplicated content. Hyde itself, is based on [Poole](http://getpoole.com), the Jekyll butler.

![Hyde screenshot](https://f.cloud.github.com/assets/98681/1831228/42af6c6a-7384-11e3-98fb-e0b923ee0468.png)


## Contents

- [Usage](#usage)
- [Author](#author)
- [License](#license)


## Usage

- Building Jekyll native extensions require the installation of Ruby dev tools. This can be done very conveniently in Linux with:
  
  ```
  sudo apt install ruby-dev
- Install Ruby gems require for serving Jekyll.

  ```
  sudo gem install jekyll jekyll-gist jekyll-sitemap jekyll-seo-tag jekyll-paginate
- Serve the page locally using by:

  ```
  jekyll serve
- Access the original documentation for [Hyde](https://github.com/poole/hyde) and [Poole](http://getpoole.com) for more information on serving and editing Jekyll pages.

More details can also be found [here](https://www.sanchitalekh.in/setup/setup.html#personal-website).


## Ruby 2.7 Dependency

Jekyll has a dependency on Ruby 2.7, however, newer OS versions (e.g. Ubuntu 22.04 LTS) come with Ruby 3.0 pre-installed. Therefore, some environment management might need to be done.

- Install RVM for managing Ruby versions

  ```
  command curl -sSL https://rvm.io/pkuczynski.asc | gpg2 --import -
  command curl -sSL https://rvm.io/mpapis.asc | gpg2 --import -
  sudo apt-get install zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2 libxml2-dev libxslt-dev gawk libgdbm-dev libncurses5-dev automake libtool bison libffi-dev nodejs
  \curl -sSL https://get.rvm.io | bash -s stable

- Set the path in ~/.zshrc to source the rvm config

  ```
  source ~/.rvm/scripts/rvm

- Install the desired version of Ruby (e.g. 2.7.6)

  ```
  rvm install 2.7.6

- 



## Author

**Sanchit Alekh**
- <https://sanchitalekh.in>
- <https://www.github.com/salekh>


## License

Open sourced under the [MIT license](LICENSE.md).

<3
