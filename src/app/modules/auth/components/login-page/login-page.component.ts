import { Component, OnInit } from '@angular/core';
import { ReplaceSpacePipe } from '@shared/pipe/replace-space.pipe';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  value = 'hello world';
  constructor(private replaceSpace: ReplaceSpacePipe) {}
  ngOnInit(): void {
    this.value = this.replaceSpace.transform(this.value);
  }
}
