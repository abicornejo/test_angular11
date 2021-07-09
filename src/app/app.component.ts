import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-seeking-lorenzo';
  imgWidth = 200;
  imgHeight = 300;
  randomImg = '';
  listImg : string[] = [];

  constructor() {

  }

  ngOnInit() {
    this.getRandomImage();
  }

  getRandomImage() {
    fetch(`https://picsum.photos/${this.imgWidth}/${this.imgHeight}`)
        .then(response => {
          if (response && response.status === 200) {
            console.log(response.url);
            this.randomImg = response.url;
          }
        })
        .catch(error => {
        });
  }

  // @ts-ignore
  addImageToList(img) {
    const temp = [...this.listImg, img];
    this.listImg = temp;
  }

  // @ts-ignore
  removeImg(index){
    const temp = this.listImg.slice(0, index).concat(this.listImg.slice(index + 1, this.listImg.length))
    this.listImg = temp;
  }
}
