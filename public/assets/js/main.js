/*
	Massively by Pixelarity
	pixelarity.com | hello@pixelarity.com
	License: pixelarity.com/license
*/

(function ($) {
  skel.breakpoints({
    xlarge: '(max-width: 1680px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)',
    xxsmall: '(max-width: 360px)',
  });

  /**
   * Applies parallax scrolling to an element's background image.
   * @return {jQuery} jQuery object.
   */
  $.fn._parallax = function (intensity) {
    const $window = $(window);
    const $this = $(this);

    if (this.length == 0 || intensity === 0) {
      return $this;
    }

    if (this.length > 1) {
      for (let i = 0; i < this.length; i++) {
        $(this[i])._parallax(intensity);
      }

      return $this;
    }

    if (!intensity) {
      intensity = 0.25;
    }

    $this.each(function () {
      const $t = $(this);
      const $bg = $('<div class="bg"></div>').appendTo($t);
      let on;
      let off;

      on = function () {
        $bg.removeClass('fixed').css('transform', 'matrix(1,0,0,1,0,0)');

        $window.on('scroll._parallax', () => {
          const pos =
            parseInt($window.scrollTop()) - parseInt($t.position().top);

          $bg.css('transform', `matrix(1,0,0,1,0,${pos * intensity})`);
        });
      };

      off = function () {
        $bg.addClass('fixed').css('transform', 'none');

        $window.off('scroll._parallax');
      };

      // Disable parallax on ..
      if (
        skel.vars.browser == 'ie' || // IE
        skel.vars.browser == 'edge' || // Edge
        window.devicePixelRatio > 1 || // Retina/HiDPI (= poor performance)
        skel.vars.mobile
      ) {
        // Mobile devices
        off();
      }

      // Enable everywhere else.
      else {
        skel.on('!large -large', on);
        skel.on('+large', off);
      }
    });

    $window
      .off('load._parallax resize._parallax')
      .on('load._parallax resize._parallax', () => {
        $window.trigger('scroll');
      });

    return $(this);
  };

  $(() => {
    const $window = $(window);
    const $body = $('body');
    const $wrapper = $('#wrapper');
    const $header = $('#header');
    const $nav = $('#nav');
    const $main = $('#main');
    let $navPanelToggle;
    let $navPanel;
    let $navPanelInner;

    // Disable animations/transitions until the page has loaded.
    $window.on('load', () => {
      window.setTimeout(() => {
        $body.removeClass('is-loading');
      }, 100);
    });

    // Prioritize "important" elements on medium.
    skel.on('+medium -medium', () => {
      $.prioritize(
        '.important\\28 medium\\29',
        skel.breakpoint('medium').active
      );
    });

    // Scrolly.
    $('.scrolly').scrolly();

    // Background.
    $wrapper._parallax(0.925);

    // Nav Panel.

    // Toggle.
    $navPanelToggle = $(
      '<a href="#navPanel" id="navPanelToggle">Menu</a>'
    ).appendTo($wrapper);

    // Change toggle styling once we've scrolled past the header.
    $header.scrollex({
      bottom: '5vh',
      enter() {
        $navPanelToggle.removeClass('alt');
      },
      leave() {
        $navPanelToggle.addClass('alt');
      },
    });

    // Panel.
    $navPanel = $(
      '<div id="navPanel">' +
        '<nav>' +
        '</nav>' +
        '<a href="#navPanel" class="close"></a>' +
        '</div>'
    )
      .appendTo($body)
      .panel({
        delay: 500,
        hideOnClick: true,
        hideOnSwipe: true,
        resetScroll: true,
        resetForms: true,
        side: 'right',
        target: $body,
        visibleClass: 'is-navPanel-visible',
      });

    // Get inner.
    $navPanelInner = $navPanel.children('nav');

    // Move nav content on breakpoint change.
    const $navContent = $nav.children();

    skel.on('!medium -medium', () => {
      // NavPanel -> Nav.
      $navContent.appendTo($nav);

      // Flip icon classes.
      $nav.find('.icons, .icon').removeClass('alt');
    });

    skel.on('+medium', () => {
      // Nav -> NavPanel.
      $navContent.appendTo($navPanelInner);

      // Flip icon classes.
      $navPanelInner.find('.icons, .icon').addClass('alt');
    });

    // Hack: Disable transitions on WP.
    if (skel.vars.os == 'wp' && skel.vars.osVersion < 10) {
      $navPanel.css('transition', 'none');
    }

    // Intro.
    const $intro = $('#intro');

    if ($intro.length > 0) {
      // Hack: Fix flex min-height on IE.
      if (skel.vars.browser == 'ie') {
        $window
          .on('resize.ie-intro-fix', () => {
            const h = $intro.height();

            if (h > $window.height()) {
              $intro.css('height', 'auto');
            } else {
              $intro.css('height', h);
            }
          })
          .trigger('resize.ie-intro-fix');
      }

      // Hide intro on scroll (> small).
      skel.on('!small -small', () => {
        $main.unscrollex();

        $main.scrollex({
          mode: 'bottom',
          top: '25vh',
          bottom: '-50vh',
          enter() {
            $intro.addClass('hidden');
          },
          leave() {
            $intro.removeClass('hidden');
          },
        });
      });

      // Hide intro on scroll (<= small).
      skel.on('+small', () => {
        $main.unscrollex();

        $main.scrollex({
          mode: 'middle',
          top: '15vh',
          bottom: '-15vh',
          enter() {
            $intro.addClass('hidden');
          },
          leave() {
            $intro.removeClass('hidden');
          },
        });
      });
    }
  });
})(jQuery);
