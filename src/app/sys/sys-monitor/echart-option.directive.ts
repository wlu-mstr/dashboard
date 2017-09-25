import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
//import * as echarts from 'echarts';
import { Http, Response } from '@angular/http';

declare var echarts;

@Directive({
    selector: 'echart'
})
export class EChartOptionDirective1 implements OnInit {
    @Input('chartType') chartType: any;

    public url = "assets/json/chinamap.json";

    constructor(private el: ElementRef,public http: Http) {}

    public ngOnInit(): void {
        //echarts.registerMap('china', json);
        echarts.init(this.el.nativeElement).setOption(this.chartType);


    }
}
