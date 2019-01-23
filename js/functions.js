// functions.js

// main switchers and submenus logic function
function applySwitchersAndSubmenus() {
	
	//translate switchstates
	switchState = {
	on: $.t('On'),
	off: $.t('Off'),
	open: $.t('Open'),
	closed: $.t('Closed')
	};
	
	//switcher for lights and windows
	$('#main-view .item').each(function () {
		let bigText = $(this).find('#bigtext');
		let status = bigText.text();
		// get clickable image element
		let onImage = bigText.siblings('#img').find('img');
		if (onImage.length == 0) {
			onImage = bigText.siblings('#img1').find('img')
		}
		if (status.length == 0) {
			status = bigText.attr('data-status');
		} else {
			$(this).off('click', '.switch');
			// special part for scenes tab
			let isScenesTab = $(this).parents('#scenecontent').length > 0;
			if (isScenesTab) {
				$(this).on('click', '.switch', function (e) {
					e.preventDefault();
					let offImage = $(this).siblings('#img2').find('img');
					let subStatus = bigText.siblings('#status').find('span').text();
					if ($.trim(subStatus).length) {
						status = subStatus;
					}
					if ((status == switchState.on) && offImage.length) {
						offImage.click();
					} else {
						if (onImage.hasClass('lcursor')) {
							onImage.click();
						}
					}
				});
			} else {
				$(this).one('click', '.switch', function (e) {
					e.preventDefault();
					let offImage = $(this).siblings('#img3').find('img');
					if (offImage.length == 0) {
						offImage = $(this).siblings('#img2').find('img');
					}
					if ((status == switchState.open || status == switchState.on) && offImage.length) {
						offImage.click();
					} else {
						if(onImage.hasClass('lcursor')) {
							onImage.click();
						}
					}
					
				});
			}
		}
		if (theme.features.time_ago.enabled === true ) {
			let lastupdated = $(this).find('#timeago');
			let xyz = $(this).find('#lastupdate');
			if (lastupdated.length == 0) {
				$(this).find('table tbody tr').append('<td id="timeago" class="timeago"></td>');
				$(this).find('#lastupdate').hide();
				}
			$(this).find("#timeago").timeago("update", xyz.text());
			}else{
			if ($(this).find('#lastSeen').length == 0) {
				$(this).find('#lastupdate').prepend('<t id="lastSeen">' + $.t('Last Seen')+': </t>')
			}
		}
		// insert submenu buttons to each item table (not on dashboard)
		let subnav = $(this).find('.options');
		let subnavButton = $(this).find('.options__bars');
		if (subnav.length && subnavButton.length == 0) {
			$(this).find('table').append('<div class="options__bars" title="' + $.t('More options') + '"></div>');
			$(this).on('click', '.options__bars', function (e) {
			e.preventDefault();
			$(this).siblings('tbody').find('td.options').slideToggle(400);
			});
			// Move Timers and log to item
			$(this).find('table').append('<div class="timers_log"></div>');
			$(this).find('.timers_log').append($(this).find('.options .btnsmall[data-i18n="Log"]'));
			$(this).find('.timers_log .btnsmall[data-i18n="Log"]').append("<img id='logImg' title='" + $.t('Log') + "' src='images/options/log.png'/>");
			$(this).find('.timers_log').append($(this).find('.options .btnsmall[data-i18n="Timers"]'));
			$(this).find('.timers_log .btnsmall[data-i18n="Timers"]').append("<img id='timerOffImg' title='" + $.t('Timers') + "' src='images/options/timer_off.png' height='18' width='18'/>");
			$(this).find('.timers_log').append($(this).find('.options .btnsmall-sel[data-i18n="Timers"]'));
			$(this).find('.timers_log .btnsmall-sel[data-i18n="Timers"]').append("<img id='timerOnImg' title='" + $.t('Timers') + "' src='images/options/timer_on.png' height='18' width='18'/>");
			$(this).find('.timers_log').append($(this).find('.options .btnsmall[href*="Log"]'));
			$(this).find('.timers_log .btnsmall[href*="Log"]:not(.btnsmall[data-i18n="Log"])').append("<img id='logImg' title='" + $.t('Log') + "' src='images/options/log.png'/>");
		}
		if ($('#dashcontent').length == 0) {
			let item = $(this).closest('.item');
			var itemID = item.attr('id');
			if (typeof(itemID) === 'undefined') {
				itemID = item[0].offsetParent.id;
			}
			let type = $(this).find('#idno');
			if (type.length == 0) {
				$(this).find('.options').append('<a class="btnsmall" id="idno"><i>Idx: ' + itemID + '</i></a>');
			}
		}
		// options to not have switch instaed of bigText on scene devices
		let switchOnScenes = false;
		let switchOnScenesDash = false;
		if (theme.features.switch_instead_of_bigtext_scenes.enabled === false){
			switchOnScenes = $(this).parents('#scenecontent').length > 0
			switchOnScenesDash = $(this).find('#itemtablesmalldoubleicon').length > 0
		}
		if (theme.features.switch_instead_of_bigtext.enabled === true ) {
			if (!switchOnScenes){
				if(!switchOnScenesDash){
					if (onImage.hasClass('lcursor')) {
					let switcher = $(this).find('.switch');
					if (status == switchState.off || status == switchState.on) {
						let title = (status == switchState.off) ? $.t('Turn On') : $.t('Turn Off');
						let checked = (status == switchState.on) ? 'checked' : '';
						if (switcher.length == 0) {
							let string = '<label class="switch" title="' + title + '"><input type="checkbox"' + checked + '><span class="slider round"></span></label>';
							bigText.after(string);
						}
						switcher.attr('title', title);
						switcher.find('input').attr('checked', checked.length > 0);
						bigText.css('display', 'none');
					} else if (status == switchState.open || status == switchState.closed) {
						let title = (status == switchState.closed) ? $.t('Open Blinds') : $.t('Close Blinds');
						let checked = (status == switchState.open) ? 'checked' : '';
						if (switcher.length == 0) {
							let string = '<label class="switch" title="' + title + '"><input type="checkbox"' + checked + '><span class="slider round"></span></label>';
							bigText.after(string);
						}
						switcher.attr('title', title);
						switcher.find('input').attr('checked', checked.length > 0);
						bigText.css('display', 'none');
					} else {
						bigText.css('display', 'block');
						switcher.remove();
					}
					bigText.attr('data-status', status);
					} else {
					bigText.css('display', 'block');
					}
				}
			}
		}
	});
	// console.log('Switchers loaded');
}
