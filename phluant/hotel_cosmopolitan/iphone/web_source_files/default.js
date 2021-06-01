$(function() {
    var supportsOrientationChange = "onorientationchange" in window,
		orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";
    window.addEventListener(orientationEvent, function() {
        set_image_class();
    }, false);
    function set_image_class() {
        if ($(window).width() > 480) {
            $(".banner_rooms_suites_small").removeClass("banner_rooms_suites_small").addClass("banner_rooms_suites");
            $(".hero_img_small").removeClass("hero_img_small").addClass("hero_img");
            $(".hero_img_roomdetails_small").removeClass("hero_img_roomdetails_small").addClass("hero_img_roomdetails");

            $(".terrace_suites_small").removeClass("terrace_suites_small").addClass("terrace_suites");
            $(".wraparound_terrace_suites_small").removeClass("wraparound_terrace_suites_small").addClass("wraparound_terrace_suites");
            $(".terrace_one_bedroom_prem_view_suites_small").removeClass("terrace_one_bedroom_prem_view_suites_small").addClass("terrace_one_bedroom_prem_view_suites");
            $(".terrace_one_bedroom_suites_small").removeClass("terrace_one_bedroom_suites_small").addClass("terrace_one_bedroom_suites");
            $(".city_view_suites_small").removeClass("city_view_suites_small").addClass("city_view_suites");
            $(".terrace_studio_pv_suites_small").removeClass("terrace_studio_pv_suites_small").addClass("terrace_studio_pv_suites");
            $(".terrace_studio_suites_small").removeClass("terrace_studio_suites_small").addClass("terrace_studio_suites");
            $(".lanai_suite_small").removeClass("lanai_suite_small").addClass("lanai_suite");
            $(".resort_location").removeClass("resort_location").addClass("resort_location_large");
			$(".bungalows_small").removeClass("bungalows_small").addClass("bungalows_large");
			$(".west-end-penthouses_small").removeClass("west-end-penthouses_small").addClass("west-end-penthouses_large");
			
			
            $(".dining_heroImg").removeClass("dining_heroImg").addClass("dining_heroImg_large");
            $(".dining_scarpetta_heroImg").removeClass("dining_scarpetta_heroImg").addClass("dining_scarpetta_heroImg_large");
            $(".dining_OverlookGrill_heroImg").removeClass("dining_OverlookGrill_heroImg").addClass("dining_OverlookGrill_heroImg_large");
            $(".dining_WickedSpoonBuffet_heroImg").removeClass("dining_WickedSpoonBuffet_heroImg").addClass("dining_WickedSpoonBuffet_heroImg_large");
            $(".dining_VaBeneCaffe_heroImg").removeClass("dining_VaBeneCaffe_heroImg").addClass("dining_VaBeneCaffe_heroImg_large");
            $(".dining_TheHenry_heroImg").removeClass("dining_TheHenry_heroImg").addClass("dining_TheHenry_heroImg_large");
            $(".dining_stk_heroImg").removeClass("dining_stk_heroImg").addClass("dining_stk_");
            $(".dining_holsteins_heroImg").removeClass("dining_holsteins_heroImg").addClass("dining_holsteins_heroImg_large");
            $(".dining_EstiatorioMilos_heroImg").removeClass("dining_EstiatorioMilos_heroImg").addClass("dining_EstiatorioMilos_heroImg_large");
            $(".dining_docg_heroImg").removeClass("dining_docg_heroImg").addClass("dining_docg_heroImg_large");
            $(".dining_CommeCa_heroImg").removeClass("dining_CommeCa_heroImg").addClass("dining_CommeCa_heroImg_large");
            $(".dining_ChinaPoblano_heroImg").removeClass("dining_ChinaPoblano_heroImg").addClass("dining_ChinaPoblano_heroImg_large");
            $(".dining_blueRibbon_heroImg").removeClass("dining_blueRibbon_heroImg").addClass("dining_blueRibbon_heroImg_large");
            $(".dining_jaleo_heroImg").removeClass("dining_jaleo_heroImg").addClass("dining_jaleo_heroImg_large");
            $(".SpecialOffers_heroImg").removeClass("SpecialOffers_heroImg").addClass("SpecialOffers_heroImg_large");

            $(".hero_img1_small").removeClass("hero_img1_small").addClass("hero_img1");
            $(".hero_img2_small").removeClass("hero_img2_small").addClass("hero_img2");
            $(".hero_img3_small").removeClass("hero_img3_small").addClass("hero_img3");
            $(".hero_img4_small").removeClass("hero_img4_small").addClass("hero_img4");
            $(".hero_img_internet_connect").removeClass("hero_img_internet_connect").addClass("hero_img_internet_connect_large");



        } else {
            $(".banner_rooms_suites").removeClass("banner_rooms_suites").addClass("banner_rooms_suites_small");
            $(".hero_img").removeClass("hero_img").addClass("hero_img_small");
            $(".hero_img").removeClass("hero_img").addClass("hero_img_small");
            $(".hero_img_roomdetails").removeClass("hero_img_roomdetails").addClass("hero_img_roomdetails_small");

            $(".hero_img_internet_connect_large").removeClass("hero_img_internet_connect_large").addClass("hero_img_internet_connect");
            $(".terrace_one_bedroom_prem_view_suites").removeClass("terrace_one_bedroom_prem_view_suites").addClass("terrace_one_bedroom_prem_view_suites_small");
            $(".terrace_one_bedroom_suites").removeClass("terrace_one_bedroom_suites").addClass("terrace_one_bedroom_suites_small");
            $(".city_view_suites").removeClass("city_view_suites").addClass("city_view_suites_small");
            $(".terrace_studio_pv_suites").removeClass("terrace_studio_pv_suites").addClass("terrace_studio_pv_suites_small");
            $(".terrace_studio_suites").removeClass("terrace_studio_suites").addClass("terrace_studio_suites_small");
			$(".bungalows_large").removeClass("bungalows_large").addClass("bungalows_small");
			$(".west-end-penthouses_large").removeClass("west-end-penthouses_large").addClass("west-end-penthouses_small");

            $(".dining_heroImg_large").removeClass("dining_heroImg_large").addClass("dining_heroImg");
            $(".dining_scarpetta_heroImg_large").removeClass("dining_scarpetta_heroImg_large").addClass("dining_scarpetta_heroImg");
            $(".dining_OverlookGrill_heroImg_large").removeClass("dining_OverlookGrill_heroImg_large").addClass("dining_OverlookGrill_heroImg");
            $(".dining_WickedSpoonBuffet_heroImg_large").removeClass("dining_WickedSpoonBuffet_heroImg_large").addClass("dining_WickedSpoonBuffet_heroImg");
            $(".dining_VaBeneCaffe_heroImg_large").removeClass("dining_VaBeneCaffe_heroImg_large").addClass("dining_VaBeneCaffe_heroImg");
            $(".dining_TheHenry_heroImg_large").removeClass("dining_TheHenry_heroImg_large").addClass("dining_TheHenry_heroImg");
            $(".dining_stk_heroImg_large").removeClass("dining_stk_heroImg_large").addClass("dining_stk_heroImg");
            $(".dining_holsteins_heroImg_large").removeClass("dining_holsteins_heroImg_large").addClass("dining_holsteins_heroImg");
            $(".dining_EstiatorioMilos_heroImg").removeClass("dining_EstiatorioMilos_heroImg_large").addClass("dining_EstiatorioMilos_heroImg");
            $(".dining_docg_heroImg_large").removeClass("dining_docg_heroImg_large").addClass("dining_docg_heroImg");
            $(".dining_CommeCa_heroImg_large").removeClass("dining_CommeCa_heroImg_large").addClass("dining_CommeCa_heroImg");
            $(".dining_ChinaPoblano_heroImg_large").removeClass("dining_ChinaPoblano_heroImg_large").addClass("dining_ChinaPoblano_heroImg");
            $(".dining_blueRibbon_heroImg_large").removeClass("dining_blueRibbon_heroImg_large").addClass("dining_blueRibbon_heroImg");
            $(".dining_jaleo_heroImg_large").removeClass("dining_jaleo_heroImg_large").addClass("dining_jaleo_heroImg");
            $(".SpecialOffers_heroImg_large").removeClass("SpecialOffers_heroImg_large").addClass("SpecialOffers_heroImg");
            $(".resort_location_large").removeClass("resort_location_large").addClass("resort_location");


            $(".hero_img1").removeClass("hero_img1").addClass("hero_img1_small");
            $(".hero_img2").removeClass("hero_img2").addClass("hero_img2_small");
            $(".hero_img3").removeClass("hero_img3").addClass("hero_img3_small");
            $(".hero_img4").removeClass("hero_img4").addClass("hero_img4_small");
        }
    }
    set_image_class();

    var room_select = $("#cmbRoomsAndSuites");
    if (room_select.length > 0) {
        room_select.change(function() {
            window.location = this.value;
        });
    }
    /*var room_select = $("#ctl00_ph_Main_ctl00_cmbOffers");
    if (room_select.length > 0) {
    room_select.change(function() {
            
    window.location = 'package-details.aspx?pid=' + this.value;

        });
    }*/
    var back_button = $("#ctl00_ph_Main_ctl00_hypIndex");
    if (back_button.length > 0) {
        back_button.click(function() {
            window.history.back();
            return false;
        });
    }

    var frm_book_a_room = $("#ctl00_ph_Main_ctl00_frmBookARoom");
    if (frm_book_a_room.length > 0) {
        var error_flag = 0,
			arr_month = $("#ctl00_ph_Main_ctl00_cmbArrMonth"),
			arr_month_new = $("#ctl00_ph_Main_ctl00_cmbArrMonthNew"),
			arr_day = $("#ctl00_ph_Main_ctl00_cmbArrDay"),
			arr_year = $("#ctl00_ph_Main_ctl00_cmbArrYear"),
			dep_month = $("#ctl00_ph_Main_ctl00_cmbDeptMonth"),
			dep_month_new = $("#ctl00_ph_Main_ctl00_cmbDeptMonthNew"),
			dep_day = $("#ctl00_ph_Main_ctl00_cmbDeptDay"),
			dep_year = $("#ctl00_ph_Main_ctl00_cmbDeptYear"),
			arrival_date_error = $("#arrival_date_error"),
			arrival_date_error_invalid = $("#arrival_date_error_invalid"),
			arrival_date_error_old = $("#arrival_date_error_old"),
			depar_date_error = $("#depar_date_error");
        depar_date_error_invalid = $("#depar_date_error_invalid");
        date_diff_error = $("#date_diff_error"),
        bookroom_notallowed_error = $("#bookroom_notallowed_error"),
			dt = new Date(),
			current_date = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());

        function set_hdn_field_vals() {
            var month_year_string_a = arr_month_new.val(), temp_array, month_year_string_d = dep_month_new.val();
            if (month_year_string_a != '') {
                temp_array = month_year_string_a.split("-");
                arr_month.val(temp_array[0]);
                arr_year.val(temp_array[1]);
            }
            if (month_year_string_d != '') {
                temp_array = month_year_string_d.split("-");
                dep_month.val(temp_array[0]);
                dep_year.val(temp_array[1]);
            }
        }

        function display_visual_date() {
            set_hdn_field_vals();
            var day_array = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"),
				month_array = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

            if (arr_month.val() != "" && arr_day.val() != "" && arr_year.val() != "") {
                if (daysInMonth(arr_month.val(), arr_year.val()) >= arr_day.val()) {
                    arr_date = new Date(arr_year.val(), arr_month.val() - 1, arr_day.val());
                    $("#arrive_message").html('You will arrive on: ' + day_array[arr_date.getDay()] + ', ' + month_array[arr_date.getMonth()] + ' ' + arr_date.getDate() + ', ' + arr_date.getFullYear());
                    if (dep_month_new.val() == '' && dep_day.val() == '') {
                        if ((arr_day.children("option").length - 1) == arr_day.prop("selectedIndex")) {
                            dep_month_new.prop("selectedIndex", arr_month_new.prop("selectedIndex") + 1).trigger("change");
                            dep_day.prop("selectedIndex", 2).trigger("change");
                        } else if ((arr_day.children("option").length - 2) == arr_day.prop("selectedIndex")) {
                            dep_month_new.prop("selectedIndex", arr_month_new.prop("selectedIndex") + 1).trigger("change");
                            dep_day.prop("selectedIndex", 1).trigger("change");
                        } else if (arr_month_new.prop("selectedIndex") != dep_month_new.find("option").length - 1) {
                            dep_month_new.prop("selectedIndex", arr_month_new.prop("selectedIndex")).trigger("change");
                            dep_day.prop("selectedIndex", arr_day.prop("selectedIndex") + 2).trigger("change");
                        }
                    }
                }
            }
            if (dep_month.val() != "" && dep_day.val() != "" && dep_year.val() != "") {
                if (daysInMonth(dep_month.val(), dep_year.val()) >= dep_day.val()) {
                    dep_date = new Date(dep_year.val(), dep_month.val() - 1, dep_day.val());
                    $("#depart_message").html("You will depart on: " + day_array[dep_date.getDay()] + ', ' + month_array[dep_date.getMonth()] + ' ' + dep_date.getDate() + ', ' + dep_date.getFullYear());
                }
            }
        }
        /*arr_month.change(function (){display_visual_date();});*/
        arr_month_new.change(function() {
            var month_year_string_a = $(this).val(), temp_array, days_in_month, i;
            if (month_year_string_a) {
                temp_array = month_year_string_a.split("-");
                days_in_month = daysInMonth(temp_array[0], temp_array[1]);
                for (i = 29; i < 32; i++) {
                    arr_day.find("option[value='" + i + "']").remove();
                }
                for (i = 29; i <= days_in_month; i++) {
                    arr_day.append('<option value="' + i + '">' + i + '</option>');
                }
            }
            display_visual_date();
        });
        arr_day.change(function() { display_visual_date(); });
        /*arr_year.change(function (){display_visual_date();});*/
        /*dep_month.change(function (){display_visual_date();});*/
        dep_month_new.change(function() {
            var month_year_string_d = $(this).val(), temp_array, days_in_month, i;
            if (month_year_string_d) {
                temp_array = month_year_string_d.split("-");
                days_in_month = daysInMonth(temp_array[0], temp_array[1]);
                for (i = 29; i < 32; i++) {
                    dep_day.find("option[value='" + i + "']").remove();
                }
                for (i = 29; i <= days_in_month; i++) {
                    dep_day.append('<option value="' + i + '">' + i + '</option>');
                }
            }
            display_visual_date();
        });
        dep_day.change(function() { display_visual_date(); });
        /*dep_year.change(function (){display_visual_date();});*/

        var book_button = $("#ctl00_ph_Main_ctl00_btnSubmit");
        if (book_button.length > 0) {
            book_button.click(function() {
                set_hdn_field_vals();
                //check selection of all dropdown boxes
                if (arr_month.val() == "" || arr_day.val() == "" || arr_year.val() == "") {
                    arrival_date_error_old.hide();
                    arrival_date_error.show();
                    error_flag = 1;
                } else {
                    if (daysInMonth(arr_month.val(), arr_year.val()) < arr_day.val()) {
                        arrival_date_error_invalid.show();
                        error_flag = 1;
                    } else {
                        arrival_date_error_invalid.hide();
                    }
                    var arr_js_date = new Date(arr_year.val(), arr_month.val() - 1, arr_day.val())
                    if (current_date > arr_js_date) {
                        arrival_date_error.hide();
                        arrival_date_error_old.show();
                        error_flag = 1;
                    } else {
                        arrival_date_error_old.hide();
                    }
                }
                if (dep_month.val() == "" || dep_day.val() == "" || dep_year.val() == "") {
                    depar_date_error_invalid.hide();
                    depar_date_error.show();
                    error_flag = 1;
                } else {
                    if (daysInMonth(dep_month.val(), dep_year.val()) < dep_day.val()) {
                        depar_date_error_invalid.show();
                        error_flag = 1;
                    } else {
                        depar_date_error_invalid.hide();
                    }
                }
                //check selection on change event
                function arrival_onchange_validate() {
                    set_hdn_field_vals()
                    date_diff_error.hide();
                    if (arr_month.val() != "" && arr_day.val() != "" && arr_year.val() != "") {
                        arrival_date_error.hide();
                        if (daysInMonth(arr_month.val(), arr_year.val()) < arr_day.val()) {
                            arrival_date_error_invalid.show();
                        } else {
                            var arr_js_date = new Date(arr_year.val(), arr_month.val() - 1, arr_day.val())
                            if (current_date > arr_js_date) {
                                arrival_date_error.hide();
                                arrival_date_error_old.show();
                                return false;
                            } else {
                                arrival_date_error_old.hide();
                            }
                            error_flag = 0;
                            arrival_date_error_invalid.hide();
                            check_date_diff();
                            display_visual_date();
                        }
                    } else {
                        arrival_date_error_invalid.hide();
                        arrival_date_error.show();
                    }
                }
                /*arr_month.change(function (){arrival_onchange_validate();});*/
                arr_month_new.change(function() { arrival_onchange_validate(); });
                arr_day.change(function() { arrival_onchange_validate(); });
                /*arr_year.change(function (){ arrival_onchange_validate();});*/

                function depart_onchange_validate() {
                    set_hdn_field_vals();
                    date_diff_error.hide();
                    if (dep_month.val() != "" && dep_day.val() != "" && dep_year.val() != "") {
                        depar_date_error.hide();
                        if (daysInMonth(dep_month.val(), dep_year.val()) < dep_day.val()) {
                            depar_date_error_invalid.show();
                        } else {
                            error_flag = 0;
                            depar_date_error_invalid.hide();
                            check_date_diff();
                            display_visual_date();
                        }
                    } else {
                        depar_date_error_invalid.hide();
                        depar_date_error.show();
                    }
                }
                /*dep_month.change(function (){ depart_onchange_validate();});*/
                dep_month_new.change(function() { depart_onchange_validate(); });
                dep_day.change(function() { depart_onchange_validate(); });
                /*dep_year.change(function (){ depart_onchange_validate();});*/

                //Departure Date should be greather than Arrival Date
                function check_date_diff() {
                    set_hdn_field_vals();
                    if (arr_month.val() != "" && arr_day.val() != "" && arr_year.val() != "" && dep_month.val() != "" && dep_day.val() != "" && dep_year.val() != "") {
                        dep_date = new Date(dep_year.val(), dep_month.val() - 1, dep_day.val());
                        arr_date = new Date(arr_year.val(), arr_month.val() - 1, arr_day.val());
                        if (dep_date <= arr_date) {
                            if (!arrival_date_error_invalid.is(":visible")) {
                                date_diff_error.show();
                            }
                            error_flag = 1;
                        } else {
                            date_diff_error.hide();
                        }
                        var dateDiff = dep_date - arr_date;
                        var day14 = 14 * 24 * 60 * 60 * 1000;
                        if (dateDiff > day14) {
                            bookroom_notallowed_error.show();
                            error_flag = 1;
                        }
                    }
                }
                check_date_diff();
                if (error_flag == 1) {
                    return false;
                }
            });
            display_visual_date();
            var server_date = $("#ctl00_ph_Main_ctl00_hdnServerDate").val().split(",");
            arr_month_new.prop("selectedIndex", 1).trigger("change");
            arr_day.prop("selectedIndex", server_date[1]).trigger("change");
        }

        frm_book_a_room.submit(function() {
            set_hdn_field_vals();
            //check selection of all dropdown boxes
            if (arr_month.val() == "" || arr_day.val() == "" || arr_year.val() == "") {
                arrival_date_error_old.hide();
                arrival_date_error.show();
                error_flag = 1;
            } else {
                if (daysInMonth(arr_month.val(), arr_year.val()) < arr_day.val()) {
                    arrival_date_error_invalid.show();
                    error_flag = 1;
                } else {
                    arrival_date_error_invalid.hide();
                }
                var arr_js_date = new Date(arr_year.val(), arr_month.val() - 1, arr_day.val())
                if (current_date > arr_js_date) {
                    arrival_date_error.hide();
                    arrival_date_error_old.show();
                    error_flag = 1;
                } else {
                    arrival_date_error_old.hide();
                }
            }
            if (dep_month.val() == "" || dep_day.val() == "" || dep_year.val() == "") {
                depar_date_error_invalid.hide();
                depar_date_error.show();
                error_flag = 1;
            } else {
                if (daysInMonth(dep_month.val(), dep_year.val()) < dep_day.val()) {
                    depar_date_error_invalid.show();
                    error_flag = 1;
                } else {
                    depar_date_error_invalid.hide();
                }
            }
            //check selection on change event
            function arrival_onchange_validate() {
                set_hdn_field_vals()
                date_diff_error.hide();
                if (arr_month.val() != "" && arr_day.val() != "" && arr_year.val() != "") {
                    arrival_date_error.hide();
                    if (daysInMonth(arr_month.val(), arr_year.val()) < arr_day.val()) {
                        arrival_date_error_invalid.show();
                    } else {
                        var arr_js_date = new Date(arr_year.val(), arr_month.val() - 1, arr_day.val())
                        if (current_date > arr_js_date) {
                            arrival_date_error.hide();
                            arrival_date_error_old.show();
                            return false;
                        } else {
                            arrival_date_error_old.hide();
                        }
                        error_flag = 0;
                        arrival_date_error_invalid.hide();
                        check_date_diff();
                        display_visual_date();
                    }
                } else {
                    arrival_date_error_invalid.hide();
                    arrival_date_error.show();
                }
            }
            /*arr_month.change(function (){arrival_onchange_validate();});*/
            arr_month_new.change(function() { arrival_onchange_validate(); });
            arr_day.change(function() { arrival_onchange_validate(); });
            /*arr_year.change(function (){ arrival_onchange_validate();});*/

            function depart_onchange_validate() {
                set_hdn_field_vals();
                date_diff_error.hide();
                if (dep_month.val() != "" && dep_day.val() != "" && dep_year.val() != "") {
                    depar_date_error.hide();
                    if (daysInMonth(dep_month.val(), dep_year.val()) < dep_day.val()) {
                        depar_date_error_invalid.show();
                    } else {
                        error_flag = 0;
                        depar_date_error_invalid.hide();
                        check_date_diff();
                        display_visual_date();
                    }
                } else {
                    depar_date_error_invalid.hide();
                    depar_date_error.show();
                }
            }
            /*dep_month.change(function (){ depart_onchange_validate();});*/
            dep_month_new.change(function() { depart_onchange_validate(); });
            dep_day.change(function() { depart_onchange_validate(); });
            /*dep_year.change(function (){ depart_onchange_validate();});*/

            //Departure Date should be greather than Arrival Date
            function check_date_diff() {
                set_hdn_field_vals();
                if (arr_month.val() != "" && arr_day.val() != "" && arr_year.val() != "" && dep_month.val() != "" && dep_day.val() != "" && dep_year.val() != "") {
                    dep_date = new Date(dep_year.val(), dep_month.val() - 1, dep_day.val());
                    arr_date = new Date(arr_year.val(), arr_month.val() - 1, arr_day.val());
                    if (dep_date <= arr_date) {
                        if (!arrival_date_error_invalid.is(":visible")) {
                            date_diff_error.show();
                        }
                        error_flag = 1;
                    } else {
                        date_diff_error.hide();
                    }
                }
            }
            check_date_diff();
            if (error_flag == 1) {
                return false;
            }
        });
        display_visual_date();
    }

    var frm_remote_check_in = $("#frmRemoteCheckIn");

    if (frm_remote_check_in.length > 0) {
        var error_flag = 0,
			arr_month = $("#cmbArrMonth"),
			arr_month_new = $("#cmbArrMonthNew"),
			arr_day = $("#cmbArrDay"),
			arr_year = $("#cmbArrYear"),
			arrival_date_error = $("#arrival_date_error"),
			arrival_date_error_old = $("#arrival_date_error_old"),
			arrival_date_error_invalid = $("#arrival_date_error_invalid"),
			confirmation_hash_error = $("#confirmation_hash_error"),
			confirmation_code = $("#confirmation_code"),
			dt = new Date(),
			current_date = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());

        function set_hdn_field_vals_check_in() {
            var month_year_string_a = arr_month_new.val(), temp_array;
            if (month_year_string_a != '') {
                temp_array = month_year_string_a.split("-");
                arr_month.val(temp_array[0]);
                arr_year.val(temp_array[1]);
            }
        }
        function display_visual_date_check_in() {
            set_hdn_field_vals_check_in();
            var day_array = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"),
				month_array = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

            if (arr_month.val() != "" && arr_day.val() != "" && arr_year.val() != "") {
                if (daysInMonth(arr_month.val(), arr_year.val()) >= arr_day.val()) {
                    arr_date = new Date(arr_year.val(), arr_month.val() - 1, arr_day.val());
                    $("#arrive_message").html('You will arrive on: ' + day_array[arr_date.getDay()] + ', ' + month_array[arr_date.getMonth()] + ' ' + arr_date.getDate() + ', ' + arr_date.getFullYear());
                }
            }
        }

        /*arr_month.change(function (){display_visual_date_check_in();});*/
        arr_month_new.change(function() {
            var month_year_string_a = $(this).val(), temp_array, days_in_month, i;
            if (month_year_string_a) {
                temp_array = month_year_string_a.split("-");
                days_in_month = daysInMonth(temp_array[0], temp_array[1]);
                for (i = 29; i < 32; i++) {
                    arr_day.find("option[value='" + i + "']").remove();
                }
                for (i = 29; i <= days_in_month; i++) {
                    arr_day.append('<option value="' + i + '">' + i + '</option>');
                }
            }
            display_visual_date_check_in();
        });
        arr_day.change(function() { display_visual_date_check_in(); });
        /*arr_year.change(function (){display_visual_date_check_in();});*/

        frm_remote_check_in.submit(function() {
            set_hdn_field_vals_check_in();
            if (arr_month.val() == "" || arr_day.val() == "" || arr_year.val() == "") {
                arrival_date_error_invalid.hide();
                arrival_date_error.show();
                error_flag = 1;
            } else {
                var arr_js_date = new Date(arr_year.val(), arr_month.val() - 1, arr_day.val())
                if (current_date > arr_js_date) {
                    arrival_date_error.hide();
                    arrival_date_error_old.show();
                    error_flag = 1;
                } else {
                    arrival_date_error_old.hide();
                }
            }
            if ($.trim(confirmation_code.val()) == "") {
                confirmation_hash_error.show();
                error_flag = 1;
            }
            function arrival_onchange_validate_remote_checkin() {
                set_hdn_field_vals_check_in();
                if (arr_month.val() != "" && arr_day.val() != "" && arr_year.val() != "") {
                    arrival_date_error.hide();
                    if (daysInMonth(arr_month.val(), arr_year.val()) < arr_day.val()) {
                        arrival_date_error_invalid.show();
                    } else {
                        var arr_js_date = new Date(arr_year.val(), arr_month.val() - 1, arr_day.val())
                        if (current_date > arr_js_date) {
                            arrival_date_error.hide();
                            arrival_date_error_old.show();
                            return false;
                        } else {
                            arrival_date_error_old.hide();
                        }
                        error_flag = 0;
                        arrival_date_error_invalid.hide();
                        display_visual_date_check_in();
                    }
                } else {
                    arrival_date_error_invalid.hide();
                    arrival_date_error.show();

                    return false;
                }

            }
            /*arr_month.change(function (){ arrival_onchange_validate_remote_checkin();});*/
            arr_month_new.change(function() { arrival_onchange_validate_remote_checkin(); });
            arr_day.change(function() { arrival_onchange_validate_remote_checkin(); });
            /*arr_year.change(function (){ arrival_onchange_validate_remote_checkin();});*/
            confirmation_code.change(function() {
                if ($.trim($(this).val()) == '') {
                    confirmation_hash_error.show();
                } else {
                    confirmation_hash_error.hide();
                }
            });

            if (error_flag == 1) {
                return false;
            }
        });
    }
});

function daysInMonth(month, year) {
    //month parameter is from 1 to 12 here. If you want number of days in Jan 2012 do daysInMonth(1,2012);
    var dd = new Date(year, month, 0);
    return dd.getDate();
}

function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else
        var expires = "";
    document.cookie = name + "=" + value + ";domain=cosmopolitanlasvegas.com" + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    setCookie(name, "", -1);
}

function SetCookieForRedirection() {
    deleteCookie("PrefDevice");
    setCookie("PrefDevice", "desktop", 30)
}




$(function() {
    if ($('#internet-connect-footer').length > 0) {

        $('.links').hide();
        $('.icons').hide();
    }

})