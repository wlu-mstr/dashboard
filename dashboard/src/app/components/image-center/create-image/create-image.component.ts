import {Component, OnInit, ViewChild, AfterViewInit, Inject} from '@angular/core';
import {CreateImageService} from './create-image.service';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-create-image',
  templateUrl: './create-image.component.html',
  styleUrls: ['./create-image.component.scss'],
  providers: [CreateImageService]
})
export class CreateImageComponent implements OnInit,AfterViewInit {

  imageName:string;
  imageDescription:string;
  basicImage:string;
  storePath:string;
  appFilename:string;
  appFile: File;

  constructor(private createImageService: CreateImageService, private router: Router,@Inject('help') private helpService) {
  }

  ngOnInit() {
   
  }


  ngAfterViewInit(){
    // $(this.status.nativeElement).addClass('active');
  }

  //提交表单，构建新镜像
  onSubmit(){
    let formData = new FormData();
    formData.append("image_name",this.imageName);
    formData.append("image_description",this.imageDescription);
    formData.append("basic_image",this.basicImage);
    formData.append("store_path",this.storePath);
    formData.append("app_filename",this.appFilename);
    formData.append("file",this.appFile);

    this.createImageService.createImg(formData).subscribe((res: any) =>{
      if(res.code === 0){
        this.router.navigate(['/content/myImage']);
      }else{
        alert("构建新镜像失败");
      }
    });
  }

  fileChange(e){
    let fileList: FileList = e.target.files;
    this.appFile = fileList[0];
    this.appFilename = this.appFile.name;
  }
}
