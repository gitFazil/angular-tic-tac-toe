import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tic-tac-toe';

  winMessage: string = '';
  isCross = false;
  itemArray: string[] = new Array(9).fill('empty');

  constructor(private toastr: ToastrService) { }

  handleClick(itemNumber: any) {
    if (this.winMessage) {
      this.toastr.success(this.winMessage);
    }

    if (this.itemArray[itemNumber] === 'empty') {
      this.itemArray[itemNumber] = this.isCross ? 'cross' : 'circle';
      this.isCross = !this.isCross;
    } else {
      this.toastr.info('Already filled');
    }

    this.checkIsWinner();
  }


  checkIsWinner = () => {
    //  checking  winner of the game
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.itemArray[a] === this.itemArray[b] &&
        this.itemArray[a] === this.itemArray[c] &&
        this.itemArray[a] !== 'empty'
      ) {
        this.winMessage = `${this.itemArray[a]} won`;
      }
    }

  };

  reloadGame = () => {
    this.winMessage = '';
    this.isCross = false;
    this.itemArray = new Array(9).fill('empty');
  };
}
