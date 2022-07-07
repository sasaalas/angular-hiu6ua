import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent (external files)', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;
  let h1: HTMLElement;

  describe('setup that may fail', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ TopBarComponent ],
      }); // missing call to compileComponents()
      fixture = TestBed.createComponent(TopBarComponent);
    });

    it('should create', () => {
      expect(fixture.componentInstance).toBeDefined();
    });
  });

   describe('Two beforeEach', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ TopBarComponent ],
      }).compileComponents();  // compile template and css
    });

    // synchronous beforeEach
    beforeEach(() => {
      fixture = TestBed.createComponent(TopBarComponent);
      component = fixture.componentInstance;  // BannerComponent test instance
      h1 = fixture.nativeElement.querySelector('h1');
    });

    tests();
  });

  describe('One beforeEach', () => {
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ TopBarComponent ],
      }).compileComponents();
      fixture = TestBed.createComponent(TopBarComponent);
      component = fixture.componentInstance;
      h1 = fixture.nativeElement.querySelector('h1');
    });

    tests();
  }); 

  function tests() {
    it('no title in the DOM until manually call `detectChanges`', () => {
      expect(h1.textContent).toEqual('');
    });

     it('should display original title', () => {
      fixture.detectChanges();
      expect(h1.textContent).toContain('My Store');
    });

    
    it('should display a different test title', () => {
      component.title = 'Test Title';
      fixture.detectChanges();
      expect(h1.textContent).toContain('Test Title');
    }); 
  }
});


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/