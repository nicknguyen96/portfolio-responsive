import { Component } from '@angular/core';

interface Skill {
  title: string,
  time: string,
  imageURL : string,
  show: boolean,
  skillsList: SkillList[],
}

interface SkillList {
  name: string,
  percentage: number,
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  skills: Skill[] = [
    {
      title: "Frontend developer",
      time: "More than 4 years",
      imageURL: "../../../assets/image/curly-brackets.png",
      show: false,
      skillsList: [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS', percentage: 80 },
        { name: 'JavaScript', percentage: 60 }
      ]
    },
    {
      title: "Backend developer",
      time: "More than 2 years",
      imageURL: "../../../assets/image/servers-group.png",
      show: false,
      skillsList: [
        { name: 'Node Js', percentage: 70 },
        { name: 'AWS', percentage: 60 },
        { name: 'Python', percentage: 60 },
        { name: 'PHP', percentage: 0 }
      ]
    }
  ];

  toggle(index: number){
    this.skills[index].show = !this.skills[index].show;
  }

}
