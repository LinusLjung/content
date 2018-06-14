(function () {
  function loadScript(url, callback) {
    var script = document.createElement('script');

    script.setAttribute('async', '');
    script.setAttribute('src', url);
    script.onLoad = callback;

    document.body.appendChild(script);
  }

  // Fixing video attributes stripped by tiny
  (function() {
    for (var videos = document.querySelectorAll(".nakd-grid video"), attributes = ["playsinline", "muted"], i = 0; i < videos.length; i++) {
      for (var video = videos[i], dataset = video.dataset, j = 0; j < attributes.length; j++) {
        var attribute = attributes[j];

        if (attribute === 'muted' && dataset.hasOwnProperty(attribute)) {
          video.muted = true;
        }

        dataset.hasOwnProperty(attribute) && (video.setAttribute(attribute, ""), delete dataset[attribute])
      }

      if (dataset.hasOwnProperty("autoplay")) {
        delete dataset.autoplay;
        video.play();
      }

      window.setTimeout(function () {
        if (dataset.hasOwnProperty("autoplay")) {
          delete dataset.autoplay;
          video.play();
        }
      }, 1000);
    }
  })();

  // Slider
  (function () {
    function initiateSlide(slide) {
      var timeoutId;
      var isSliding = false;
      var directionForward = true;

      function setTimeout() {
        timeoutId = window.setTimeout(function () { doSlide(slideNext); }, interval);
      }

      function setActionListners(actions, forward) {
        function onClick() {
          directionForward = forward;

          doSlide(forward ? slideNext : slidePrev);
        }

        for (var i = 0; i < actions.length; i++) {
          actions[i].addEventListener('click', onClick, false);
        }
      }

      function doSlide(callback) {
        if (isSliding) {
          return;
        }

        tryJump();
        trySlide(callback);
      }

      function trySlide(callback) {
        isSliding = true;

        window.clearTimeout(timeoutId);
        window.requestAnimationFrame(callback);
      }

      function slidePrev() {
        currentTransform -= 100;
        updateSlide();
      }

      function slideNext() {
        currentTransform += 100;
        updateSlide();
      }

      function updateSlide() {
        innerInner.style.webkitTransform = 'translateX(' + -currentTransform + '%)';
        innerInner.style.transform = 'translateX(' + -currentTransform + '%)';
      }

      function tryJump() {
        var transform = Math.abs(currentTransform / 100);
        if (transform % (numberOfItems) === 0) {
          if (directionForward) {
            inner.style.webkitTransform = 'translateX(' + currentTransform + '%)';
            inner.style.transform = 'translateX(' + currentTransform + '%)';
          } else {
            inner.style.webkitTransform = 'translateX(' + (currentTransform - (numberOfItems) * 100) + '%)';
            inner.style.transform = 'translateX(' + (currentTransform - (numberOfItems) * 100) + '%)';
          }
        }
      }

      function handleTransitionEnd(e) {
        if (e.propertyName !== 'transform') {
          return;
        }

        isSliding = false;

        directionForward = true;

        setTimeout();
      }

      var inner = slide.querySelector('.nakd-grid-slide-inner');
      var innerInner = inner.querySelector('.nakd-grid-slide-inner-inner');
      var actionsNext = slide.querySelectorAll('[data-nakd-grid-slide-next]');
      var actionsPrev = slide.querySelectorAll('[data-nakd-grid-slide-prev]');
      var numberOfItems = innerInner.childElementCount;
      var interval = Number(slide.dataset.nakdGridSlideInterval) || 4000;
      var currentTransform = 0;

      innerInner.appendChild(innerInner.children[0].cloneNode(true));

      innerInner.addEventListener('webkiTransitionEnd', handleTransitionEnd, false);
      innerInner.addEventListener('mozTransitionEnd', handleTransitionEnd, false);
      innerInner.addEventListener('transitionend', handleTransitionEnd, false);

      setActionListners(actionsPrev, false);
      setActionListners(actionsNext, true);

      setTimeout();
    }

    var slides = document.querySelectorAll('[data-nakd-grid-slide]');
    for (var i = 0; i < slides.length; i++) {
      if (slides[i].dataset.hasOwnProperty('initiated')) {
        continue;
      }

      slides[i].dataset.initiated = '';
      initiateSlide(slides[i]);
    }
  })();

  // Scroll to bottom
  (function () {
    var buttons = document.querySelectorAll('[data-nakd-grid-scrolltobottom]');

    if (!buttons.length) {
      return;
    }

    loadScript('https://www.na-kd.com/globalassets/js/smooth-scroll.js?ref=C5FDFE475E', function () {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (e) {
          e.preventDefault();

          var element = e.target;

          while ((element = element.parentElement) && !element.classList.contains('nakd-grid'));

          if (!element) {
            return;
          }

          window.scrollTo({
            top: document.body.scrollTop = window.pageYOffset + element.getBoundingClientRect().bottom,
            behavior: 'smooth'
          });
        }, false);
      }
    });
  })();

  // Youtube embedder
  (function () {
    var youtubeElements = document.querySelectorAll('[data-nakd-youtube-id]');

    if (!youtubeElements.length) {
      return;
    }

    loadScript('https://www.youtube.com/iframe_api');

    window.onYouTubeIframeAPIReady = function () {
      var counter = 0;
      var element, i;

      for (i = 0; i < youtubeElements.length; i++) {
        (function (element) {
          var dataset = element.dataset;
          var autoplay = dataset.hasOwnProperty('nakdYoutubeAutoplay');
          var muted = dataset.hasOwnProperty('nakdYoutubeMuted');

          if (!element.id) {
            element.id = 'nakd-grid-youtube-' + counter++;
          }

          new YT.Player(element.id, {
            videoId: dataset.nakdYoutubeId, // YouTube Video ID
            width: '100%', // Player width (in px)
            height: '100%', // Player height (in px)
            playerVars: {
              autoplay: autoplay ? 1 : 0, // Auto-play the video on load
              controls: 0, // Show pause/play buttons in player
              showinfo: 0, // Hide the video title
              modestbranding: 1, // Hide the Youtube Logo
              loop: 1, // Run the video in a loop
              fs: 0, // Hide the full screen button
              cc_load_policy: 0, // Hide closed captions
              iv_load_policy: 3, // Hide the Video Annotations
              autohide: 0, // Hide video controls when playing,
              rel: 0,
              playsinline: 1,
              playlist: autoplay ? dataset.nakdYoutubeId : undefined
            },
            events: {
              onReady: function (e) {
                if (autoplay || muted) {
                  e.target.mute();
                }

                if (autoplay) {
                  e.target.playVideo();
                }
              }
            }
          });
        })(youtubeElements[i]);
      }
    };

    window.YT && onYouTubeIframeAPIReady();
  })();

  // Fade in on scroll
  (function () {
    var imageElements = document.querySelectorAll('[data-nakd-grid-image]');

    if (imageElements.length === 0) {
      return;
    }

    loadScript('https://www.na-kd.com/globalassets/js/intersection-observer.js?ref=27482E4616', function () {
      function observe() {
        var i;

        var observer = new IntersectionObserver(function (entries, observer) {
          var entry,
            i;

          for (i = 0; i < entries.length; i++) {
            entry = entries[i];

            if (!entry.isIntersecting) {
              continue;
            }

            observer.unobserve(entry.target);
            entry.target.style.opacity = 1;
          }
        }, {
          threshold: [.5, 1]
        });

        for (i = 0; i < imageElements.length; i++) {
          observer.observe(imageElements[i]);
        }
      }

      if (window.IntersectionObserver) {
        observe();
      } else {
        window.onIntersectionObserverReady = observe;
      }
    });
  })();
})();
