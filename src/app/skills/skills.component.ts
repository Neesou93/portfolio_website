import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  icons = ['html.svg','Javascript.svg','CSS.svg','Angular.svg','TS.svg','Api.svg','Firebase.svg','git.svg','scrum.svg','wp.svg','Frame.svg'];
  icons_text = ['HTML','Javascript','CSS','Angular','TypeScript','Rest-Api','Firebase','GIT','Scrum','WordPress','Material design']

}
