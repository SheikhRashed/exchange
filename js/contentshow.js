var ourCustom = true;
! function(t, n, e, o) {
	var i = "contentshow", s = {
		debounceDelay : 100,
		startOffset : 100,
		endOffset : 100,
		useViewportUnit : !1,
		sectionIndex : 0,
		contentAnimateClass : "contentshow-animate",
		onSectionChange : null,
		onContentChange : null,
		swipe : {
			threshold : 10,
			maxDuration : 200
		}
	}, c = 1, r = 2;
	function h(n, e) {
		this.element = n, this.$el = t(n), this.metadata = this.$el.data(), this.options = t.extend({}, s, e, this.metadata), this._defaults = s, this._name = i, this.init()
	}
	h.prototype = {
		init : function() {
			this.$contentshow = this.$el, this.$contentshowSectionsContainer = this.$contentshow.find(".contentshow-sections-container"), this.$contentshowSections = this.$contentshow.find(".contentshow-section:visible"), this.$nextButton = this.$contentshow.find(".contentshow-next-button"), this.totalSections = this.$contentshowSections.length, this.direction = r, this.buildNavigation(), this.setEvents(), this.disableScrollOnTouchDevices(), this.start()
		},
		buildNavigation : function() {
			for (var t = this.$contentshow.find(".contentshow-nav"), n = [], e = 0; e < this.totalSections; e++) {
				this.$contentshowSections[e].getAttribute("data-navname") && (n[e] = '<li><span class="contentshow-nav-item" data-section-index="' + e + '">' + this.$contentshowSections[e].getAttribute("data-navname") + "</span></li>")
			}
			t.html("<ul>" + n.join("") + "</ul>"), this.$contentshowNavItems = t.find(".contentshow-nav-item"), this.$contentshowNavItems.first().addClass("active visited")
		},
		setEvents : function() {
			var e, o, i, s, c = this;
			t(n).on("wheel", ( e = function(t) {
				if(ourCustom == false)
				return false;
				var n = t.originalEvent.deltaY;
				c.onscroll(n)
			}, o = this.options.debounceDelay, i = !0,
			function() {
				var t = this, n = arguments, c = i && !s;
				clearTimeout(s), s = setTimeout(function() {
					s = null, i || e.apply(t, n)
				}, o), c && e.apply(t, n)
			})), this.$contentshow.on("touchstart", function(t) {
				c.startSwipe = t.originalEvent.changedTouches[0].pageY, c.startTime = (new Date).getTime()
			}), this.$contentshow.on("touchend touchcancel", function(t) {
				var n, e = t.originalEvent.changedTouches[0].pageY, o = Math.abs(e - c.startSwipe);
				(new Date).getTime() - c.startTime <= c.options.swipe.maxDuration && o >= c.options.swipe.threshold && ( n = c.startSwipe - e, c.onscroll(n))
			}), this.$contentshowNavItems.click(function(n) {
				var e = t(this).data("sectionIndex");
				c.jumptoSection(e)
			}), t(".move-scroll").click(function(n) {
				var e = t(this).data("sectionindex");
				c.jumptoSection(e)
			}), this.$nextButton.click(function(t) {
				c.onscroll(1)
			}), t("html").keydown(function(t) {
				if(ourCustom == false)
            	return false;
				38 == t.which ? c.onscroll(-1) : 40 == t.which && c.onscroll(1)
			}), t(".fixed-down").click(function(t) {
				if(ourCustom == false)
            	return false;
				c.onscroll(1)
			}), t(".fixed-up").click(function(t) {
				if(ourCustom == false)
					return false;
				c.onscroll(-1)
			})
		},
		onscroll : function(t) {
			var n;
			this.$currentSection || (this.$currentSection = this.$contentshowSections.eq(this.currentSectionIndex)), n = t < 0 ? c : r, this.showContent(n)
		},
		start : function() {
			"number" != typeof this.options.sectionIndex || this.options.sectionIndex <= 0 ? this.gotoSection(0) : this.jumptoSection(this.options.sectionIndex)
		},
		gotoSection : function(n) {
			var e, o, i, s;
			this.$contentshow.removeClass("current-section-" + this.currentSectionIndex), this.currentSectionIndex = n, this.$contentshowNavItems.removeClass("active"), this.$contentshowNavItems.eq(this.currentSectionIndex).addClass("active visited"), e = -100 * this.currentSectionIndex, o = Modernizr.csstransforms3d ? "translate3d(0, " + e + "vh, 0)" : "translateY(" + e + "vh)", this.$contentshowSectionsContainer.css("transform", o), this.$currentSection = this.$contentshowSections.eq(this.currentSectionIndex), this.currentHighestContentOrder = ( i = this.$currentSection.find(".contentshow-content"), s = -1, i.each(function() {
				var n = t(this).data("csOrder");
				n > s && ( s = n)
			}), s), this.$currentContentContainer = this.$currentSection.find(".contentshow-grouped-contents"), this.direction === r && (this.currentContentOrder = -1, this.showContent(this.direction)), this.$contentshow.addClass("current-section-" + this.currentSectionIndex), "function" == typeof this.options.onSectionChange && this.options.onSectionChange.call(this, {
				$section : this.$currentSection,
				sectionIndex : this.currentSectionIndex
			})
		},
		showContent : function(t) {
			var n, e, o;
			if((t===2) && this.currentContentOrder===1 && $(window).width()<=1024){
				$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(1).find(".hide-slide2").css("display","none");
				$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(2).find(".hide-slide2").css("display","block");
			}
			if((t===1) && this.currentContentOrder===2 && $(window).width()<=1024){
				$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(1).find(".hide-slide2").css("display","block");
			}
			if((t===2) && this.currentContentOrder===2 && $(window).width()<=1024){
			$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(2).find(".hide-slide2").css("display","none");
			}
			if((t===1) && this.currentContentOrder===3 && $(window).width()<=1024){
				$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(2).find(".hide-slide2").css("display","block");
			}
			if((t===2)  && this.currentContentOrder===-1 && $(window).width()<=1024){
				$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(0).find(".hide-slide2").css("display","block");

			}
			if((t===2)  && this.currentContentOrder===0 && $(window).width()<=1024){
				$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(0).find(".hide-slide2").css("display","none");
				$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(1).find(".hide-slide2").css("display","block");
				$("section").eq(this.currentSectionIndex).find(".hide-slide").css("display","none");

			}else if((t===1)  && this.currentContentOrder===1 && $(window).width()<=1024){
					$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(0).find(".hide-slide2").css("display","block");
				$(".contact-section .contentshow-content.contentshow-slide-up.p-30").eq(1).find(".hide-slide2").css("display","none");
				$("section").eq(this.currentSectionIndex).find(".hide-slide").css("display","flex");
			}
			if (this.direction = t, this.direction === c) {

				if (0 === this.currentContentOrder && 0 === this.currentSectionIndex)
					return;
				this.$currentSection.find('.contentshow-content[data-cs-order="' + this.currentContentOrder + '"]').removeClass(this.options.contentAnimateClass), this.adjustGroupedContentsContainers(), -1 === ( e = this.currentContentOrder - 1) ? ( o = this.currentSectionIndex - 1, this.gotoSection(o), this.currentContentOrder = this.currentHighestContentOrder) : this.currentContentOrder = e, n = this.$currentSection.find('.contentshow-content[data-cs-order="' + this.currentContentOrder + '"]'), this.triggerContentChange(n), this.toggleNextButton()
			} else{
				this.direction === r && ( e = this.currentContentOrder + 1, -1 === this.currentContentOrder && -1 === this.currentHighestContentOrder ? this.currentContentOrder = e : e <= this.currentHighestContentOrder ? (this.currentContentOrder = e, ( n = this.$currentSection.find('.contentshow-content[data-cs-order="' + this.currentContentOrder + '"]')).addClass(this.options.contentAnimateClass), this.triggerContentChange(n), this.adjustGroupedContentsContainers(), this.toggleNextButton()) : this.currentSectionIndex < this.totalSections - 1 && ( o = this.currentSectionIndex + 1, this.gotoSection(o)))

		}
		},
		triggerContentChange : function(t) {
			"function" == typeof this.options.onContentChange && t.length && this.options.onContentChange.call(this, {
				$content : t,
				contentOrder : this.currentContentOrder,
				sectionIndex : this.currentSectionIndex
			})
		},
		toggleNextButton : function() {
			this.currentSectionIndex === this.totalSections - 1 && this.currentContentOrder === this.currentHighestContentOrder ? (this.$nextButton.hide(), this.$contentshow.addClass("last-content")) : (this.$nextButton.is(":visible") || this.$nextButton.show(), this.$contentshow.removeClass("last-content"))
		},
		adjustGroupedContentsContainers : function(n) {
			var e = this;
			( n = n || this.$currentContentContainer).each(function() {
				e.adjustGroupedContentsContainerPosition(t(this))
			})
		},
		adjustGroupedContentsContainerPosition : function(n) {
			var o, i, s = t(e).height(), c = s - this.options.startOffset - this.options.endOffset, r = 0, h = this.options.useViewportUnit ? "vh" : "px";
			n.find("." + this.options.contentAnimateClass).each(function() {
				r += t(this).outerHeight(!0)
			}), 0 === r ? o = s : ( o = r < c ? 50 - r / s * 100 / 2 : -(r - (s - this.options.endOffset)) / s * 100, this.options.useViewportUnit ? o = o : o *= s / 100), o += h, i = Modernizr.csstransforms3d ? "translate3d(0, " + o + ", 0)" : "translateY(" + o + ")", n.css("transform", i)
		},
		jumptoSection : function(t) {
			var n = this.currentSectionIndex || 0;
			this.currentSectionIndex !== t && (n < t ? this.fastForward(n, t) : this.fastRewind(n, t))
		},
		fastForward : function(t, n) {
			for (var e = t; e < n; e++)
				this.showAllContent(e);
			this.direction = r, this.gotoSection(n)
		},
		fastRewind : function(t, n) {
			for (var e = t; e >= n; e--)
				this.hideAllContent(e);
			this.direction = r, this.gotoSection(n)
		},
		showAllContent : function(t) {
			var n = this.$contentshowSections.eq(t), e = n.find(".contentshow-grouped-contents");
			n.find(".contentshow-content").addClass(this.options.contentAnimateClass), this.adjustGroupedContentsContainers(e)
		},
		hideAllContent : function(t) {
			this.$contentshowSections.eq(t).find(".contentshow-content").removeClass(this.options.contentAnimateClass)
		},
		disableScrollOnTouchDevices : function() {
			Modernizr.touch && (t(n).on("touchmove", function(t) {
				t.preventDefault()
			}), setTimeout(function() {
				t(n).scrollTop(0)
			}, 1e3))
		}
	}, t.fn[i] = function(n) {
		return this.each(function() {
			t.data(this, "plugin_" + i) || t.data(this, "plugin_" + i, new h(this, n))
		})
	}
}(jQuery, window, document);
