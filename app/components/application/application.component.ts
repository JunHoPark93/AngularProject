import { Component, ViewEncapsulation } from "@angular/core";
// ProductService 서비스를 불러온다. 화면에 표시할 데이터는 이 서비스에서 제공한다.
import { Product, ProductService } from "../../services/product.service";

/**
 * Application Component는 이 프로젝트의 루트 컴포넌트이며 AppModule에서 직접 사용하는데,
 * 애플리케이션에서 사용할 다른 컴포넌트들을 선언하는 용도로 사용된다.
 *
 * */
@Component({ // ApplicationComponet 클래스에 어노테이션을 붙여서 Angular 컴포넌트로 만든다.

    // selector는 index.html파일에 이 컴포넌트가 사용될 위치를 지정한다.
    selector : 'auction-application',
    // HTML 템플릿은 application.component.html 파일로 지정한다.
    templateUrl : 'app/components/application/application.component.html',
    // CSS파일 지정
    styleUrls : ['app/components/application/application.component.css'],
    // css에서 정의하는 스타일을 전체 어플리케이션에 적용한다.
    encapsulation : ViewEncapsulation.None
})
export default class ApplicationComponent {
   /* products : Array<Product> = [];*/

    // 생성자에 ProductService를 전달하면 Angular가 적당한 프로바이더를 찾아서 의존성으로 주입한다.
    // private으로 선언하면 이 객체를 클래스 멤버 변수로 사용할 수 있다.
   /* constructor (private productService : ProductService) {

        // 상품의 목록을 받아서 products 프로퍼티에 할당한다. 컴포넌트 프로퍼티는 데이터 바인딩을 사용해서 화면에 표시할 수 있다.
        this.products = this.productService.getProducts();
    }*/
}