import { Component } from '@angular/core';

interface Modal {
  imgUrl: string,
  detail: string[],
}

interface Services {
  title: string,
  strongTitle: string,
  imgUrl: string,
  show: boolean,
  modal: Modal
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Services[] = [
    {
      title: 'UI/UX',
      strongTitle: 'Designer',
      imgUrl: '../../../assets/image/web-grid-icon.png',
      show: false,
      modal: {
        imgUrl: '../../../assets/image/checked-icon.png',
        detail: [
          'I develop the user interface.',
          'Web page development.',
          'I create ux element interactions.',
          'I position your company branch.']
      }
    },
    {
      title: 'Frontend',
      strongTitle: 'Developer',
      imgUrl: '../../../assets/image/web-grid-icon.png',
      show: false,
      modal: {
        imgUrl: '../../../assets/image/checked-icon.png',
        detail: [
          'I develop the user interface.',
          'Web page development.',
          'I create ux element interactions.',
          'I position your company branch.']
      }
    },
    {
      title: 'Branding',
      strongTitle: 'Designer',
      imgUrl: '../../../assets/image/web-grid-icon.png',
      show: false,
      modal: {
        imgUrl: '../../../assets/image/checked-icon.png',
        detail: [
          'I develop the user interface.',
          'Web page development.',
          'I create ux element interactions.',
          'I position your company branch.']
      }
    }
  ]

  openModal(index :number) :void {
    this.services[index].show = true;
  }

  closeModal(index : number ) :void {
    this.services[index].show = false;
  }
}
