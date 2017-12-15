import { Component, Input, OnInit } from '@angular/core'; // ngOnInit() 함수가 정의되어 있는 OnInit 인터페이스를 불러온다.

@Component({
    templateUrl : 'app/components/stars/stars.component.html',
    styles : [' .starrating { color : #d17851}'],
    selector : 'auction-stars'
})
export default class StarsComponent implements OnInit {

    // 데이터 바인딩 표현식을 사용해서 부모 컴포넌트에서
    // count와 rating 변수를 설정할 수 있도록 한다.
    @Input() count : number = 5;        // count 프로퍼티는 렌더링될 별의 전체 개수, 전달 안되면 5개로 렌더링
    @Input() rating : number = 0;       // rating 프로퍼티는 별점을 저장하고 색칠 된 별과 그렇지 않은 별이 몇 개인지 판단
    stars : boolean[] = []; // 이 배열은 각 항목마다 별 하나를 렌더링 한다.

    // 부모 컴포넌트에서 전달되는 값으로 stars 변수를 초기화 한다.
    ngOnInit () {
        for(let i=1; i<=this.count; i++) {
            this.stars.push(i > this.rating);
        }
    }
}