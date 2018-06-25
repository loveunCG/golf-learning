import { Component, OnInit } from '@angular/core';
import { Skill } from './models/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  skills: Skill[];
  constructor() { }

  ngOnInit() {
  }

}
