import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent (external files)', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let h2: HTMLElement;

  describe('setup that may fail', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ProductListComponent ],
      }); // missing call to compileComponents()
      fixture = TestBed.createComponent(ProductListComponent);
    });

    it('should create', () => {
      expect(fixture.componentInstance).toBeDefined();
    });
  });


  describe('Two beforeEach', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ProductListComponent ],
      }).compileComponents();  // compile template and css
    });

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(ProductListComponent);
      component = fixture.componentInstance;  // ProductListComponent test instance
      h2 = fixture.nativeElement.querySelector('h2');
    });

    tests();
  });

  describe('One beforeEach', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ ProductListComponent ],
      }).compileComponents();
      fixture = TestBed.createComponent(ProductListComponent);
      component = fixture.componentInstance;
      h2 = fixture.nativeElement.querySelector('h2');
    });

    tests();
  }); 


  function tests() {
    it('no title in the DOM until manually call `detectChanges`', () => {
      expect(h2.textContent).toEqual('Products');
    });
    
  }
});


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/