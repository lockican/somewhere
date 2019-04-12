let blockToggle = document.querySelector('.example-page__toggle-block'),
    btnBefore = document.querySelector('.example-page__before-item'),
    btnAfter = document.querySelector('.example-page__after-item'),
    toggle = document.querySelector('.example-page__toggle'),
    before = document.querySelector('.example-page__image--before'),
    after = document.querySelector('.example-page__image--after');

    function changeImage(){
      let body = document.body;
      
      if(body.offsetWidth <= 675){

        toggle.style.transition = 0.3 + 's';

        btnBefore.addEventListener('click', function(){
        toggle.style.marginLeft = 3 + 'px';
        before.style.width = 100 + '%' ;
        before.style.transition = 0.5 + 's';
        after.style.width = 0;
        });
        btnAfter.addEventListener('click', function(){
          toggle.style.marginLeft = 44 + 'px';
          before.style.width = 0;
          after.style.width = 100 + '%';
          after.style.transition = 0.2 + 's';
        });
      }
      else{  
        btnAfter.addEventListener('click', function(){
          toggle.style.transition = 0.6 + 's';
          toggle.style.marginLeft = 396 + 'px';
          before.style.width = 0 + '%';
          before.style.transition = 0.6 + 's';
          after.style.width = 100 + '%';
          after.style.transition = 0.6 + 's';
        });

        btnBefore.addEventListener('click', function(){
          toggle.style.transition = 0.6 + 's';
          toggle.style.marginLeft = 0;
          before.style.width = 100 + '%';
          before.style.transition = 0.6 + 's';
        });
        toggle.onmousedown = function(event){
          event.preventDefault();
  
          let shiftX = event.clientX - toggle.getBoundingClientRect().left;
  
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
  
          function onMouseMove(event){
              let newLeft = event.clientX - shiftX - blockToggle.getBoundingClientRect().left;
  
              if (newLeft < 0) {
                  newLeft = 0;
                }
                let rightEdge = blockToggle.offsetWidth - toggle.offsetWidth;
                if (newLeft > rightEdge) {
                  newLeft = rightEdge;
                } 
                toggle.style.marginLeft = newLeft + 'px';
                before.style.width = (rightEdge - newLeft)/3.89 + '%';
                toggle.style.transition = 'none';
                before.style.transition = 'none';           
          }
          function onMouseUp(){
              document.removeEventListener('mouseup', onMouseUp);
              document.removeEventListener('mousemove', onMouseMove);
            }
              toggle.addEventListener('dblclick' , function(e){
                  toggle.style.marginLeft = 200 + 'px';
                  toggle.style.transition = 0.6 + 's';
                  before.style.transition = 0.6 + 's';
                  before.style.width = 50 + '%';
              });
      };
      toggle.ondragstart = function() {
          return false;
        };
      }
    }

    changeImage();  