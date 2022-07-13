class Video {
    constructor(title, uploader, time) {
      this.Title = title;
      this.Uploader = uploader;
      this.Time = time;
      this.watch = function (movie) {
        console.log(
          `${this.Uploader} watched all ${this.Time} of ${this.Title}`
        )
      };
    }
  }
  let movie = new Video("Spider-man far from home", "jad", "2 hours");
   movie.watch();