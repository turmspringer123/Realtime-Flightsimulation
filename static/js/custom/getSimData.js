let velo
let altitude;
let ai
let ice
let type
let compass;
let lat;
let lon;
let ai_state
let zulu;
let airport;
let latitude;
latitude = 0;
let longitude;
longitude = 0;
let zulu_time;
let ambient_temperature
let eta;
let time_zone
let ete;
let gps_ete;
let speed;
let gps_eta
let baro_pressure

let nav1_active;
let nav1_standby;
let nav2_active;
let nav2_standby;

let adf_stby_1000;
let adf_stby_100;
let adf_stby_10;
let adf_stby_1;

let adf_use_1000;
let adf_use_100;
let adf_use_10;
let adf_use_1;

let adf_card_deg
let nav1_obs_deg
let nav2_obs_deg

let nav1_g3000_freq
let nav2_g3000_freq
let adf_g3000_freq

let com1_active;
let com1_standby;
let com2_active;
let com2_standby;

let xpndr_1000;
let xpndr_100;
let xpndr_10;
let xpndr_1;

let xpndr_g3000;
let com1_g3000_freq;
let com2_g3000_freq;

let com1_transmit;
let com2_transmit;

let autopilot_master;
let autopilot_nav1_lock;
let autopilot_wing_leveler;
let autopilot_heading_lock;
let autopilot_heading_lock_dir;
let autopilot_altitude_lock;
let autopilot_altitude_lock_var;
let autopilot_attitude_hold;
let autopilot_autothrottle;
let autopilot_glideslope_hold;

let autopilot_backcourse_hold;
let autopilot_vertical_hold;
let autopilot_vertical_hold_var;

let autopilot_flight_director_active;
let autopilot_airspeed_hold;
let autopilot_airspeed_hold_var;
let airspeed_indicated;
let autopilot_loc_mode;
let autopilot_appr_mode;
let autopilot_yaw_damper;
let plane_heading_degrees;
let ai_heading
let ai_model
let ai_from
let ai_to
let ai_flightNumber
let ai_airline
let totalWeight
let model

let landing_vs1;
let landing_t1;
let landing_vs2;
let landing_t2;
let landing_vs3;
let landing_t3;
let airspeed_mach;
let sim_rate;

let light_landing;
let light_taxi;
let light_strobe;
let light_nav;
let light_beacon;
let light_cabin;
let light_logo;
let light_panel;
let light_wing;
let light_recognition;
let pitot_heat;
let eng_anti_ice;
let structural_deice;

let fltpln_arr;
let gps_next_lat;
let gps_next_lon;
let gps_next_wp_arr = [[],[]];
let loadfltpln_switch;
loadfltpln_switch = 0;

let gear;
let flaps_position;
let spoilers;

// Maps Size Fix Function
let map_size_fix;

map_size_fix = 0;

//Press and Hold
let btnhold;

//General Data
let selected_plane

//JF PA-28R Vars
let JF_PA_28R_AP_HDG;
let JF_PA_28R_AP_ROLL;
let JF_PA_28R_AP_MODE;
let JF_PA_28R_LIGHT_BCN;
let JF_PA_28R_AP_NAV;
let JF_PA_28R_FUEL_SEL;

//MilViz Corsair Vars
let MILVIZ_CORSAIR_OIL_COOLER;
let MILVIZ_CORSAIR_INTERCOOLER;
let MILVIZ_CORSAIR_COWL_FLAPS;
let MILVIZ_CORSAIR_COWL_FLAPS2;
let MILVIZ_CORSAIR_SUPERCHARGER;
let MILVIZ_CORSAIR_FUEL_SELECT;
let MILVIZ_CORSAIR_LOCK_TAILWHEEL;
let MILVIZ_CORSAIR_GUN_LIGHT;
let MILVIZ_CORSAIR_FUEL_PUMP;
let MILVIZ_CORSAIR_EXT_LIGHTS;
let MILVIZ_CORSAIR_WING_LIGHTS;
let MILVIZ_CORSAIR_TAIL_LIGHTS;
let MILVIZ_CORSAIR_FORM_LIGHTS;
let MILVIZ_CORSAIR_SECTION_LIGHTS;
let MILVIZ_CORSAIR_SECSEL_LIGHTS;
let MILVIZ_CORSAIR_APP_LIGHTS;
let MILVIZ_CORSAIR_COCKPIT_LIGHTS;
let MILVIZ_CORSAIR_CHART_LIGHTS;
let MILVIZ_CORSAIR_LPANEL_LIGHTS;
let MILVIZ_CORSAIR_RPANEL_LIGHTS;
let MILVIZ_CORSAIR_LINST_LIGHTS;
let MILVIZ_CORSAIR_RINST_LIGHTS;
let MILVIZ_CORSAIR_DEFROST;
let MILVIZ_CORSAIR_PITOT_HEAT;
let MILVIZ_CORSAIR_RECPT;

//PMDG DC-6
let PMDG_DC6_AFE_BEFORE_START;
let PMDG_DC6_AFE_AFTER_START;
let PMDG_DC6_AFE_BEFORE_TAKEOFF;
let PMDG_DC6_AFE_TAKEOFF_DRY;
let PMDG_DC6_AFE_TAKEOFF_WET;
let PMDG_DC6_AFE_CRUISE;
let PMDG_DC6_AFE_DESCENT;
let PMDG_DC6_AFE_INRANGE;
let PMDG_DC6_AFE_BEFORE_LANDING;
let PMDG_DC6_AFE_AFTER_LANDING;
let PMDG_DC6_AFE_PARKING;
let PMDG_DC6_ADF_ACTIVE;
let PMDG_DC6_ADF_STBY;
let PMDG_DC6_DME_MODE;
let PMDG_DC6_GYRO_PILOT;
let PMDG_DC6_ALTITUDE_CONTROL;
let PMDG_DC6_GYRO_PILOT_MODE;
let PMDG_DC6_AP_MECHANICAL;
let PMDG_DC6_GUST_LOCK;
let PMDG_DC6_AP_TURN;
let PMDG_DC6_AP_CLIMB_WHEEL;
let PMDG_DC6_AP_AILERON_TRIM;
let PMDG_DC6_COM1_STANDBY;
let PMDG_DC6_COM1_ACTIVE;
let PMDG_DC6_COM2_STANDBY;
let PMDG_DC6_COM2_ACTIVE;
let PMDG_DC6_COM1_SPACING;
let PMDG_DC6_COM2_SPACING;
let PMDG_DC6_ADF_MODE;

//FBW A32NX
let FBW_A32NX_EFIS_CSTR;
let FBW_A32NX_EFIS_WPT;
let FBW_A32NX_EFIS_VORD;
let FBW_A32NX_EFIS_NDB;
let FBW_A32NX_EFIS_ARPT;
let FBW_A32NX_EFIS_NAV_MODE;
let FBW_A32NX_EFIS_RANGE;
let FBW_A32NX_EFIS_NAV_AID_L1;
let FBW_A32NX_EFIS_NAV_AID_L2;
let FBW_A32NX_EFIS_LS;
let FBW_A32NX_EFIS_FD;
let FBW_A32NX_AP_SPD_INDICATOR;
let FBW_A32NX_AP_HDG_INDICATOR;
let FBW_A32NX_AP_SPD_SLOT;
let FBW_A32NX_AP_HDG_SLOT;
let FBW_A32NX_AP_VS_SLOT;
let FBW_A32NX_AP_ALT_SLOT;
let FBW_A32NX_AP_LOC_MODE;
let FBW_A32NX_AP_ATHR_MODE;
let FBW_A32NX_AP_EXPED_MODE;
let FBW_A32NX_AP_APPR_MODE;
let FBW_A32NX_AP_VS_FPA_INDICATOR;
let FBW_A32NX_AP_ALT_INC_MODE;
let FBW_A32NX_AP_ALT_INDICATOR;
let FBW_A32NX_AP_ACTIVE;
let FBW_A32NX_AP_HDG_UNIT;
let FBW_A32NX_AP_VS_UNIT;
let FBW_A32NX_AP_SPD_UNIT;
let FBW_A32NX_OVHD_ANTIICE_ENG1;
let FBW_A32NX_OVHD_ANTIICE_ENG2;
let FBW_A32NX_OVHD_ANTIICE_WING;
let FBW_A32NX_OVHD_PROBESWINDOW;
let FBW_A32NX_OVHD_STROBE;
let FBW_A32NX_OVHD_NOSE;
let FBW_A32NX_OVHD_RWY;
let FBW_A32NX_OVHD_LAND;

//Asobo Ju-52
let ASO_JU52_ADF_MODE;
let ASO_JU52_DMI;
let ASO_JU52C_ALTIMETER_1;
let ASO_JU52C_ALTIMETER_2;
let ASO_JU52C_COM1;
let ASO_JU52C_AP;
let ASO_JU52C_AP_DISENG;
let ASO_JU52C_AP_HEADING;
let ASO_JU52C_PITOT;

function mapRefreshFix() {
	map_size_fix = map_size_fix + 1;
	map_size_fix_mod = map_size_fix % 2;
	
	if (map_size_fix_mod = 0) {
		$('#map_row').height('+=1');
	} else {
		$('#map_row').height('-=1');
	};
	
	map_size_fix = map_size_fix * 1;
}

// Display Radio (Navigation) Data
function displayRadio() {
	$("#nav1_active").text(nav1_active);
	$("#nav1_standby").text(nav1_standby);
	$("#nav2_active").text(nav2_active);
	$("#nav2_standby").text(nav2_standby);
	$("#adf_stby_1000").text(adf_stby_1000);
	$("#adf_stby_100").text(adf_stby_100);
	$("#adf_stby_10").text(adf_stby_10);
	$("#adf_stby_1").text(adf_stby_1);
	$("#adf_act_1000").text(adf_use_1000);
	$("#adf_act_100").text(adf_use_100);
	$("#adf_act_10").text(adf_use_10);
	$("#adf_act_1").text(adf_use_1);
	$("#ADF_heading").attr('placeholder', adf_card_deg);
	$("#OBS_1_heading").attr('placeholder', nav1_obs_deg);
	$("#OBS_2_heading").attr('placeholder', nav2_obs_deg);
	$("#com1_active").text(com1_active);
	$("#com1_standby").text(com1_standby);
	$("#com2_active").text(com2_active);
	$("#com2_standby").text(com2_standby);
	$("#xpndr_1000").text(xpndr_1000);
	$("#xpndr_100").text(xpndr_100);
	$("#xpndr_10").text(xpndr_10);
	$("#xpndr_1").text(xpndr_1);
}

// Sync Radio/Navigation variables
function syncRadio() {
	$.getJSON($SCRIPT_ROOT + '/ui', {}, function(data) {
		nav1_active = Number(data.NAV1_ACTIVE).toFixed(2);
		nav1_standby = Number(data.NAV1_STANDBY).toFixed(2);
		nav2_active = Number(data.NAV2_ACTIVE).toFixed(2);
		nav2_standby = Number(data.NAV2_STANDBY).toFixed(2);
		adf_stby_1000 = Number(data.ADF_STBY_1000);
		adf_stby_100 = Number(data.ADF_STBY_100);
		adf_stby_10 = Number(data.ADF_STBY_10);
		adf_stby_1 = Number(data.ADF_STBY_1);
		adf_use_1000 = Number(data.ADF_USE_1000);
		adf_use_100 = Number(data.ADF_USE_100);
		adf_use_10 = Number(data.ADF_USE_10);
		adf_use_1 = Number(data.ADF_USE_1);
		adf_card_deg = Number(data.ADF_CARD_DEG);
		nav1_obs_deg = Number(data.NAV1_OBS_DEG);
		nav2_obs_deg = Number(data.NAV2_OBS_DEG);
		com1_active = Number(data.COM1_ACTIVE).toFixed(3);
		com1_standby = Number(data.COM1_STANDBY).toFixed(3);
		com2_active = Number(data.COM2_ACTIVE).toFixed(3);
		com2_standby = Number(data.COM2_STANDBY).toFixed(3);
		xpndr_1000 = Number(data.XPNDR_1000);
		xpndr_100 = Number(data.XPNDR_100);
		xpndr_10 = Number(data.XPNDR_10);
		xpndr_1 = Number(data.XPNDR_1);
    });
	setInterval(function() {
		displayRadio();
	}, 500);
}

window.setInterval(function(){
    getSimulatorData();
    displayData();
    updateMap();
}, 200);

function xpndrplus1() {
	// xpndr plus 1
	xpndr_1 = xpndr_1 + 1;
	if (xpndr_1 > 7) {
		xpndr_1 = 0;
	}
	$("#xpndr_1").text(xpndr_1);
}

function xpndrminus1() {
	// xpndr minus 1
	xpndr_1 = xpndr_1 - 1;
	if (xpndr_1 < 0) {
		xpndr_1 = 7;
	}
	$("#xpndr_1").text(xpndr_1);
}

function xpndrplus10() {
	// xpndr plus 10
	xpndr_10 = xpndr_10 + 1;
	if (xpndr_10 > 7) {
		xpndr_10 = 0;
	}
	$("#xpndr_10").text(xpndr_10);
}

function xpndrminus10() {
	// xpndr minus 10
	xpndr_10 = xpndr_10 - 1;
	if (xpndr_10 < 0) {
		xpndr_10 = 7;
	}
	$("#xpndr_10").text(xpndr_10);
}

function xpndrplus100() {
	// xpndr plus 100
	xpndr_100 = xpndr_100 + 1;
	if (xpndr_100 > 7) {
		xpndr_100 = 0;
	}
	$("#xpndr_100").text(xpndr_100);
}

function xpndrminus100() {
	// xpndr minus 100
	xpndr_100 = xpndr_100 - 1;
	if (xpndr_100 < 0) {
		xpndr_100 = 7;
	}
	$("#xpndr_100").text(xpndr_100);
}

function xpndrplus1000() {
	// xpndr plus 1000
	xpndr_1000 = xpndr_1000 + 1;
	if (xpndr_1000 > 7) {
		xpndr_1000 = 0;
	}
	$("#xpndr_1000").text(xpndr_1000);
}

function xpndrminus1000() {
	// xpndr minus 1000
	xpndr_1000 = xpndr_1000 - 1;
	if (xpndr_1000 < 0) {
		xpndr_1000 = 7;
	}
	$("#xpndr_1000").text(xpndr_1000);
}

function adfplus1() {
	// ADF plus 1 kHz
	adf_stby_1 = adf_stby_1 + 1;
	if (adf_stby_1 > 9) {
		adf_stby_1 = 0;
	}
	$("#adf_stby_1").text(adf_stby_1);
}

function adfplus1_use() {
	// ADF plus 1 kHz
	adf_use_1 = adf_use_1 + 1;
	if (adf_use_1 > 9) {
		adf_use_1 = 0;
	}
	$("#adf_act_1").text(adf_use_1);
}

function adfminus1() {
	// ADF minus 1 kHz
	adf_stby_1 = adf_stby_1 - 1;
	if (adf_stby_1 < 0) {
		adf_stby_1 = 9;
	}
	$("#adf_stby_1").text(adf_stby_1);
}

function adfminus1_use() {
	// ADF minus 1 kHz
	adf_use_1 = adf_use_1 - 1;
	if (adf_use_1 < 0) {
		adf_use_1 = 9;
	}
	$("#adf_act_1").text(adf_use_1);
}

function adfplus10() {
	// ADF plus 10 kHz
	adf_stby_10 = adf_stby_10 + 1;
	if (adf_stby_10 > 9) {
		adf_stby_10 = 0;
	}
	$("#adf_stby_10").text(adf_stby_10);
}

function adfplus10_use() {
	// ADF plus 10 kHz
	adf_use_10 = adf_use_10 + 1;
	if (adf_use_10 > 9) {
		adf_use_10 = 0;
	}
	$("#adf_act_10").text(adf_use_10);
}

function adfminus10() {
	// ADF minus 10 kHz
	adf_stby_10 = adf_stby_10 - 1;
	if (adf_stby_10 < 0) {
		adf_stby_10 = 9;
	}
	$("#adf_stby_10").text(adf_stby_10);
}

function adfminus10_use() {
	// ADF minus 10 kHz
	adf_use_10 = adf_use_10 - 1;
	if (adf_use_10 < 0) {
		adf_use_10 = 9;
	}
	$("#adf_act_10").text(adf_use_10);
}

function adfplus100() {
	// ADF plus 100 kHz
	
	if (adf_stby_1000 == 0) {
		adf_stby_100 = adf_stby_100 + 1;
		if (adf_stby_100 > 9) {
			adf_stby_100 = 0;
			adf_stby_1000 = 1;
		}
	} else {
		adf_stby_100 = adf_stby_100 + 1;
		if (adf_stby_100 > 7) {
			adf_stby_100 = 1;
			adf_stby_1000 = 0;
		}
	}
	$("#adf_stby_1000").text(adf_stby_1000);
	$("#adf_stby_100").text(adf_stby_100);
}

function adfplus100_use() {
	// ADF plus 100 kHz
	
	if (adf_use_1000 == 0) {
		adf_use_100 = adf_use_100 + 1;
		if (adf_use_100 > 9) {
			adf_use_100 = 0;
			adf_use_1000 = 1;
		}
	} else {
		adf_use_100 = adf_use_100 + 1;
		if (adf_use_100 > 7) {
			adf_use_100 = 1;
			adf_use_1000 = 0;
		}
	}
	$("#adf_act_1000").text(adf_use_1000);
	$("#adf_act_100").text(adf_use_100);
}

function adfminus100() {
	// ADF minus 100 kHz
	if (adf_stby_1000 == 0) {
		adf_stby_100 = adf_stby_100 - 1;
		if (adf_stby_100 < 1) {
			adf_stby_100 = 7;
			adf_stby_1000 = 1;
		}
	} else {
		adf_stby_100 = adf_stby_100 - 1;
		if (adf_stby_100 < 0) {
			adf_stby_100 = 9;
			adf_stby_1000 = 0;
		}
	}
	$("#adf_stby_1000").text(adf_stby_1000);
	$("#adf_stby_100").text(adf_stby_100);
}

function adfminus100_use() {
	// ADF minus 100 kHz
	if (adf_use_1000 == 0) {
		adf_use_100 = adf_use_100 - 1;
		if (adf_use_100 < 1) {
			adf_use_100 = 7;
			adf_use_1000 = 1;
		}
	} else {
		adf_use_100 = adf_use_100 - 1;
		if (adf_use_100 < 0) {
			adf_use_100 = 9;
			adf_use_1000 = 0;
		}
	}
	$("#adf_act_1000").text(adf_use_1000);
	$("#adf_act_100").text(adf_use_100);
}


function adfswitch() {
	let dummy_adf_stby_1000 = adf_stby_1000;
	let dummy_adf_stby_100 = adf_stby_100;
	let dummy_adf_stby_10 = adf_stby_10;
	let dummy_adf_stby_1 = adf_stby_1;
	adf_stby_1000 = adf_use_1000;
	adf_stby_100 = adf_use_100;
	adf_stby_10 = adf_use_10;
	adf_stby_1 = adf_use_1;
	adf_use_1000 = dummy_adf_stby_1000;
	adf_use_100 = dummy_adf_stby_100;
	adf_use_10 = dummy_adf_stby_10;
	adf_use_1 = dummy_adf_stby_1;
	$("#adf_stby_1000").text(adf_stby_1000);
	$("#adf_stby_100").text(adf_stby_100);
	$("#adf_stby_10").text(adf_stby_10);
	$("#adf_stby_1").text(adf_stby_1);
	$("#adf_act_1000").text(adf_use_1000);
	$("#adf_act_100").text(adf_use_100);
	$("#adf_act_10").text(adf_use_10);
	$("#adf_act_1").text(adf_use_1);
}

function com1minus1() {
	// COM 1 minus 1 MHz
	com1_standby = Number(com1_standby) - 1;
	if (com1_standby < 118) {
		com1_standby = com1_standby + 19
	};
	com1_standby = com1_standby.toFixed(3);
	$("#com1_standby").text(com1_standby);
}

function com1minus1_act() {
	// COM 1 minus 1 MHz
	com1_active = Number(com1_active) - 1;
	if (com1_active < 118) {
		com1_active = com1_active + 19
	};
	com1_active = com1_active.toFixed(3);
	$("#com1_active").text(com1_active);
}

function com1plus1() {
	// COM 1 plus 1 MHz
	com1_standby = Number(com1_standby) + 1;
	if (com1_standby > 137) {
		com1_standby = com1_standby - 19
	};
	com1_standby = com1_standby.toFixed(3);
	$("#com1_standby").text(com1_standby);
}

function com1plus1_act() {
	// COM 1 plus 1 MHz
	com1_active = Number(com1_active) + 1;
	if (com1_active > 137) {
		com1_active = com1_active - 19
	};
	com1_active = com1_active.toFixed(3);
	$("#com1_active").text(com1_active);
}

function com1minus005() {
	// COM 1 minus 0.005 MHz
	let com1_standby_floor = Math.floor(com1_standby);
	let com1_standby_decimal = com1_standby - com1_standby_floor;
	com1_standby_decimal = com1_standby_decimal.toFixed(3)
	com1_standby_decimal = Number(com1_standby_decimal) - 0.005;
	let com1_standby_decimalx10 = (com1_standby_decimal * 10) - Math.floor(com1_standby_decimal * 10);
	com1_standby_decimalx10 = com1_standby_decimalx10.toFixed(2);
	if (com1_standby_decimalx10 == 0.95 || com1_standby_decimalx10 == 0.70 || com1_standby_decimalx10 == 0.45 || com1_standby_decimalx10 == 0.20) {
		com1_standby_decimal = com1_standby_decimal - 0.005;
	};
	if (com1_standby_decimal < 0) {
		com1_standby_decimal = 0.990
	};
	com1_standby = com1_standby_floor + com1_standby_decimal;
	com1_standby = com1_standby.toFixed(3);
	$("#com1_standby").text(com1_standby);
}

function com1minus05_act() {
	// COM 1 active minus 0.025 MHz
	let com1_active_floor = Math.floor(com1_active);
	let com1_active_decimal = com1_active - com1_active_floor;
	com1_active_decimal = com1_active_decimal.toFixed(3);
	com1_active_decimal = Number(com1_active_decimal) - 0.025;
	if (com1_active_decimal < 0) {
		com1_active_decimal = 0.975
	};
	com1_active = com1_active_floor + com1_active_decimal;
	com1_active = com1_active.toFixed(3);
	$("#com1_active").text(com1_active);
}

function com1plus005() {
	// COM 1 plus 0.005 MHz
	let com1_standby_floor = Math.floor(com1_standby);
	let com1_standby_decimal = com1_standby - com1_standby_floor;
	com1_standby_decimal = com1_standby_decimal.toFixed(3)
	com1_standby_decimal = Number(com1_standby_decimal) + 0.005;
	let com1_standby_decimalx10 = (com1_standby_decimal * 10) - Math.floor(com1_standby_decimal * 10);
	com1_standby_decimalx10 = com1_standby_decimalx10.toFixed(2);
	if (com1_standby_decimalx10 == 0.95 || com1_standby_decimalx10 == 0.70 || com1_standby_decimalx10 == 0.45 || com1_standby_decimalx10 == 0.20) {
		com1_standby_decimal = com1_standby_decimal + 0.005;
	};
	if (com1_standby_decimal >= 1) {
		com1_standby_decimal = 0.0
	};
	com1_standby = com1_standby_floor + com1_standby_decimal;
	com1_standby = com1_standby.toFixed(3);
	$("#com1_standby").text(com1_standby);
}

function com1plus05_act() {
	// NAV 1 plus 0.025 MHz
	let com1_active_floor = Math.floor(com1_active);
	let com1_active_decimal = com1_active - com1_active_floor;
	com1_active_decimal = com1_active_decimal.toFixed(3);
	com1_active_decimal = Number(com1_active_decimal) + 0.025;
	if (com1_active_decimal >= 1) {
		com1_active_decimal = 0.0
	};
	com1_active = com1_active_floor + com1_active_decimal;
	com1_active = com1_active.toFixed(3);
	$("#com1_active").text(com1_active);
}

function com1switch() {
	let dummy_com1 = Number(com1_standby);
	com1_standby = Number(com1_active);
	com1_active = Number(dummy_com1);
	com1_standby = com1_standby.toFixed(3);
	com1_active = com1_active.toFixed(3);
	$("#com1_active").text(com1_active);
	$("#com1_standby").text(com1_standby);
}

function com2minus1() {
	// COM 2 minus 1 MHz
	com2_standby = Number(com2_standby) - 1;
	if (com2_standby < 118) {
		com2_standby = com2_standby + 19
	};
	com2_standby = com2_standby.toFixed(3);
	$("#com2_standby").text(com2_standby);
}

function com2minus1_act() {
	// COM 2 minus 1 MHz
	com2_active = Number(com2_active) - 1;
	if (com2_active < 118) {
		com2_active = com2_active + 19
	};
	com2_active = com2_active.toFixed(3);
	$("#com2_active").text(com2_active);
}

function com2plus1() {
	// COM 2 plus 1 MHz
	com2_standby = Number(com2_standby) + 1;
	if (com2_standby > 137) {
		com2_standby = com2_standby - 19
	};
	com2_standby = com2_standby.toFixed(3);
	$("#com2_standby").text(com2_standby);
}

function com2plus1_act() {
	// COM 2 plus 1 MHz
	com2_active = Number(com2_active) + 1;
	if (com2_active > 137) {
		com2_active = com2_active - 19
	};
	com2_active = com2_active.toFixed(3);
	$("#com2_active").text(com2_active);
}

function com2minus005() {
	// COM 2 minus 0.005 MHz
	let com2_standby_floor = Math.floor(com2_standby);
	let com2_standby_decimal = com2_standby - com2_standby_floor;
	com2_standby_decimal = com2_standby_decimal.toFixed(3)
	com2_standby_decimal = Number(com2_standby_decimal) - 0.005;
	let com2_standby_decimalx10 = (com2_standby_decimal * 10) - Math.floor(com2_standby_decimal * 10);
	com2_standby_decimalx10 = com2_standby_decimalx10.toFixed(2);
	if (com2_standby_decimalx10 == 0.95 || com2_standby_decimalx10 == 0.70 || com2_standby_decimalx10 == 0.45 || com2_standby_decimalx10 == 0.20) {
		com2_standby_decimal = com2_standby_decimal - 0.005;
	};
	if (com2_standby_decimal < 0) {
		com2_standby_decimal = 0.990
	};
	com2_standby = com2_standby_floor + com2_standby_decimal;
	com2_standby = com2_standby.toFixed(3);
	$("#com2_standby").text(com2_standby);
}

function com2minus05_act() {
	// COM 2 active minus 0.05 MHz
	let com2_active_floor = Math.floor(com2_active);
	let com2_active_decimal = com2_active - com2_active_floor;
	com2_active_decimal = com2_active_decimal.toFixed(3);
	com2_active_decimal = Number(com2_active_decimal) - 0.025;
	if (com2_active_decimal < 0) {
		com2_active_decimal = 0.975
	};
	com2_active = com2_active_floor + com2_active_decimal;
	com2_active = com2_active.toFixed(3);
	$("#com2_active").text(com2_active);
}

function com2plus005() {
	// COM 2 plus 0.005 MHz
	let com2_standby_floor = Math.floor(com2_standby);
	let com2_standby_decimal = com2_standby - com2_standby_floor;
	com2_standby_decimal = com2_standby_decimal.toFixed(3)
	com2_standby_decimal = Number(com2_standby_decimal) + 0.005;
	let com2_standby_decimalx10 = (com2_standby_decimal * 10) - Math.floor(com2_standby_decimal * 10);
	com2_standby_decimalx10 = com2_standby_decimalx10.toFixed(2);
	if (com2_standby_decimalx10 == 0.95 || com2_standby_decimalx10 == 0.70 || com2_standby_decimalx10 == 0.45 || com2_standby_decimalx10 == 0.20) {
		com2_standby_decimal = com2_standby_decimal + 0.005;
	};
	if (com2_standby_decimal >= 1) {
		com2_standby_decimal = 0.0
	};
	com2_standby = com2_standby_floor + com2_standby_decimal;
	com2_standby = com2_standby.toFixed(3);
	$("#com2_standby").text(com2_standby);
}

function com2plus05_act() {
	// COM 2 plus 0.05 MHz
	let com2_active_floor = Math.floor(com2_active);
	let com2_active_decimal = com2_active - com2_active_floor;
	com2_active_decimal = com2_active_decimal.toFixed(3);
	com2_active_decimal = Number(com2_active_decimal) + 0.025;
	if (com2_active_decimal >= 1) {
		com2_active_decimal = 0.0
	};
	com2_active = com2_active_floor + com2_active_decimal;
	com2_active = com2_active.toFixed(3);
	$("#com2_active").text(com2_active);
}

function com2switch() {
	let dummy_com2 = Number(com2_standby);
	com2_standby = Number(com2_active);
	com2_active = Number(dummy_com2);
	com2_standby = com2_standby.toFixed(3);
	com2_active = com2_active.toFixed(3);
	$("#com2_active").text(com2_active);
	$("#com2_standby").text(com2_standby);
}

function nav1minus1() {
	// NAV 1 minus 1 MHz
	nav1_standby = Number(nav1_standby) - 1;
	if (nav1_standby < 108) {
		nav1_standby = nav1_standby + 10
	};
	nav1_standby = nav1_standby.toFixed(2);
	$("#nav1_standby").text(nav1_standby);
}

function nav1minus1_act() {
	// NAV 1 active minus 1 MHz
	nav1_active = Number(nav1_active) - 1;
	if (nav1_active < 108) {
		nav1_active = nav1_active + 10
	};
	nav1_active = nav1_active.toFixed(2);
	$("#nav1_active").text(nav1_active);
}

function nav1plus1() {
	// NAV 1 minus 1 MHz
	nav1_standby = Number(nav1_standby) + 1;
	if (nav1_standby > 118) {
		nav1_standby = nav1_standby - 10
	};
	nav1_standby = nav1_standby.toFixed(2);
	$("#nav1_standby").text(nav1_standby);
}

function nav1plus1_act() {
	// NAV 1 active minus 1 MHz
	nav1_active = Number(nav1_active) + 1;
	if (nav1_active > 118) {
		nav1_active = nav1_active - 10
	};
	nav1_active = nav1_active.toFixed(2);
	$("#nav1_active").text(nav1_active);
}

function nav1minus005() {
	// NAV 1 minus 0.05 MHz
	let nav1_standby_floor = Math.floor(nav1_standby);
	let nav1_standby_decimal = nav1_standby - nav1_standby_floor;
	nav1_standby_decimal = nav1_standby_decimal.toFixed(2);
	nav1_standby_decimal = Number(nav1_standby_decimal) - 0.05;
	if (nav1_standby_decimal < 0) {
		nav1_standby_decimal = 0.95
	};
	nav1_standby = nav1_standby_floor + nav1_standby_decimal;
	nav1_standby = nav1_standby.toFixed(2);
	$("#nav1_standby").text(nav1_standby);
}

function nav1minus005_act() {
	// NAV 1 active minus 0.05 MHz
	let nav1_active_floor = Math.floor(nav1_active);
	let nav1_active_decimal = nav1_active - nav1_active_floor;
	nav1_active_decimal = nav1_active_decimal.toFixed(2);
	nav1_active_decimal = Number(nav1_active_decimal) - 0.05;
	if (nav1_active_decimal < 0) {
		nav1_active_decimal = 0.95
	};
	nav1_active = nav1_active_floor + nav1_active_decimal;
	nav1_active = nav1_active.toFixed(2);
	$("#nav1_active").text(nav1_active);
}

function nav1plus005() {
	// NAV 1 plus 0.05 MHz
	let nav1_standby_floor = Math.floor(nav1_standby);
	let nav1_standby_decimal = nav1_standby - nav1_standby_floor;
	nav1_standby_decimal = nav1_standby_decimal.toFixed(2);
	nav1_standby_decimal = Number(nav1_standby_decimal) + 0.05;
	if (nav1_standby_decimal >= 1) {
		nav1_standby_decimal = 0.0
	};
	nav1_standby = nav1_standby_floor + nav1_standby_decimal;
	nav1_standby = nav1_standby.toFixed(2);
	$("#nav1_standby").text(nav1_standby);
}

function nav1plus005_act() {
	// NAV 1 plus 0.05 MHz
	let nav1_active_floor = Math.floor(nav1_active);
	let nav1_active_decimal = nav1_active - nav1_active_floor;
	nav1_active_decimal = nav1_active_decimal.toFixed(2);
	nav1_active_decimal = Number(nav1_active_decimal) + 0.05;
	if (nav1_active_decimal >= 1) {
		nav1_active_decimal = 0.0
	};
	nav1_active = nav1_active_floor + nav1_active_decimal;
	nav1_active = nav1_active.toFixed(2);
	$("#nav1_active").text(nav1_active);
}

function nav1switch() {
	let dummy_nav1 = Number(nav1_standby);
	nav1_standby = Number(nav1_active);
	nav1_active = Number(dummy_nav1);
	nav1_standby = Number(nav1_standby).toFixed(2);
	nav1_active = Number(nav1_active).toFixed(2);
	$("#nav1_active").text(nav1_active);
	$("#nav1_standby").text(nav1_standby);
}

function nav2minus1() {
	// NAV 2 minus 1 MHz
	nav2_standby = Number(nav2_standby) - 1;
	if (nav2_standby < 108) {
		nav2_standby = nav2_standby + 10
	};
	nav2_standby = nav2_standby.toFixed(2);
	$("#nav2_standby").text(nav2_standby);
}

function nav2minus1_act() {
	// NAV 2 minus 1 MHz
	nav2_active = Number(nav2_active) - 1;
	if (nav2_active < 108) {
		nav2_active = nav2_active + 10
	};
	nav2_active = nav2_active.toFixed(2);
	$("#nav2_active").text(nav2_active);
}

function nav2plus1() {
	// NAV 2 plus 1 MHz
	nav2_standby = Number(nav2_standby) + 1;
	if (nav2_standby > 118) {
		nav2_standby = nav2_standby - 10
	};
	nav2_standby = nav2_standby.toFixed(2);
	$("#nav2_standby").text(nav2_standby);
}

function nav2plus1_act() {
	// NAV 2 plus 1 MHz
	nav2_active = Number(nav2_active) + 1;
	if (nav2_active > 118) {
		nav2_active = nav2_active - 10
	};
	nav2_active = nav2_active.toFixed(2);
	$("#nav2_active").text(nav2_active);
}

function nav2minus005() {
	// NAV 2 minus 0.05 MHz
	let nav2_standby_floor = Math.floor(nav2_standby);
	let nav2_standby_decimal = nav2_standby - nav2_standby_floor;
	nav2_standby_decimal = nav2_standby_decimal.toFixed(2);
	nav2_standby_decimal = Number(nav2_standby_decimal) - 0.05;
	if (nav2_standby_decimal < 0) {
		nav2_standby_decimal = 0.95
	};
	nav2_standby = nav2_standby_floor + nav2_standby_decimal;
	nav2_standby = nav2_standby.toFixed(2);
	$("#nav2_standby").text(nav2_standby);
}

function nav2minus005_act() {
	// NAV 2 minus 0.05 MHz
	let nav2_active_floor = Math.floor(nav2_active);
	let nav2_active_decimal = nav2_active - nav2_active_floor;
	nav2_active_decimal = nav2_active_decimal.toFixed(2);
	nav2_active_decimal = Number(nav2_active_decimal) - 0.05;
	if (nav2_active_decimal < 0) {
		nav2_active_decimal = 0.95
	};
	nav2_active = nav2_active_floor + nav2_active_decimal;
	nav2_active = nav2_active.toFixed(2);
	$("#nav2_active").text(nav2_active);
}

function nav2plus005() {
	// NAV 2 plus 0.05 MHz
	let nav2_standby_floor = Math.floor(nav2_standby);
	let nav2_standby_decimal = nav2_standby - nav2_standby_floor;
	nav2_standby_decimal = nav2_standby_decimal.toFixed(2);
	nav2_standby_decimal = Number(nav2_standby_decimal) + 0.05;
	if (nav2_standby_decimal >= 1) {
		nav2_standby_decimal = 0.0
	};
	nav2_standby = nav2_standby_floor + nav2_standby_decimal;
	nav2_standby = nav2_standby.toFixed(2);
	$("#nav2_standby").text(nav2_standby);
}

function nav2plus005_act() {
	// NAV 2 plus 0.05 MHz
	let nav2_active_floor = Math.floor(nav2_active);
	let nav2_active_decimal = nav2_active - nav2_active_floor;
	nav2_active_decimal = nav2_active_decimal.toFixed(2);
	nav2_active_decimal = Number(nav2_active_decimal) + 0.05;
	if (nav2_active_decimal >= 1) {
		nav2_active_decimal = 0.0
	};
	nav2_active = nav2_active_floor + nav2_active_decimal;
	nav2_active = nav2_active.toFixed(2);
	$("#nav2_active").text(nav2_active);
}

function nav2switch() {
	let dummy_nav2 = nav2_standby;
	nav2_standby = nav2_active;
	nav2_active = dummy_nav2;
	nav2_standby = Number(nav2_standby).toFixed(2);
	nav2_active = Number(nav2_active).toFixed(2);
	$("#nav2_active").text(nav2_active);
	$("#nav2_standby").text(nav2_standby);
}

// Get rest of sim data which needs to be updated regularly 
function getSimulatorData() {
    $.getJSON($SCRIPT_ROOT + '/ui', {}, function(data) {
		//Get Plane
		selected_plane = data.selected_plane;

        //Navigation
        compass = data.MAGNETIC_COMPASS;
        latitude = data.LATITUDE;
        longitude = data.LONGITUDE;
		lat= data.PLANE_LATITUDE;
		lon=data.PLANE_LONGITUDE
		
        //Autopilot
        autopilot_master = data.AUTOPILOT_MASTER;
        autopilot_nav1_lock = data.AUTOPILOT_NAV1_LOCK;
        autopilot_wing_leveler = data.AUTOPILOT_WING_LEVELER;
        autopilot_heading_lock = data.AUTOPILOT_HEADING_LOCK;
        autopilot_heading_lock_dir = data.AUTOPILOT_HEADING_LOCK_DIR;
        autopilot_altitude_lock = data.AUTOPILOT_ALTITUDE_LOCK;
        autopilot_altitude_lock_var = data.AUTOPILOT_ALTITUDE_LOCK_VAR;
        autopilot_attitude_hold = data.AUTOPILOT_ATTITUDE_HOLD;
        autopilot_autothrottle = data.AUTOPILOT_AUTOTHROTTLE;
        autopilot_glideslope_hold = data.AUTOPILOT_GLIDESLOPE_HOLD;
        autopilot_approach_hold = data.AUTOPILOT_APPROACH_HOLD;
        autopilot_backcourse_hold = data.AUTOPILOT_BACKCOURSE_HOLD;
        autopilot_vertical_hold = data.AUTOPILOT_VERTICAL_HOLD
        autopilot_vertical_hold_var = data.AUTOPILOT_VERTICAL_HOLD_VAR;
        autopilot_pitch_hold = data.AUTOPILOT_PITCH_HOLD;
        autopilot_pitch_hold_ref = data.AUTOPILOT_PITCH_HOLD_REF;
        autopilot_flight_director_active = data.AUTOPILOT_FLIGHT_DIRECTOR_ACTIVE;
        autopilot_airspeed_hold = data.AUTOPILOT_FLIGHT_LEVEL_CHANGE;
        autopilot_airspeed_hold_var = data.AUTOPILOT_AIRSPEED_HOLD_VAR;
        airspeed_indicated = data.AIRSPEED_INDICATED;
		autopilot_loc_mode = data.AUTOPILOT_LOC_MODE;
		autopilot_appr_mode = data.AUTOPILOT_APPR_MODE;
		autopilot_yaw_damper = data.AUTOPILOT_YAW_DAMPER;
		plane_heading_degrees = data.PLANE_HEADING_DEGREES;
		airspeed_mach = data.AIRSPEED_MACH;
		zulu_time=data.LOCAL_TIME;
		ambient_temperature = data.TOTAL_AIR_TEMPERATURE;
		gps_ete=data.GPS_ETE;
		gps_eta=data.GPS_ETA;
		baro_pressure = data.BAROMETER_PRESSURE
		ai= data.AMBIENT_VISIBILITY;
		airport=data.GPS_APPROACH_AIRPORT_ID;
		velo=data.AMBIENT_WIND_VELOCITY
		ice=data.STRUCTURAL_ICE_PCT
		ai_flightNumber=data.ATC_FLIGHT_NUMBER
		ai_airline=data.NEARBY_AIRCRAFT
		totalWeight=data.TOTAL_WEIGHT
		ai_heading=data.AI_DESIRED_HEADING
		ai_from=data.AI_TRAFFIC_ETD
		ai_to=data.AI_TRAFFIC_TOAIRPORT
		ai_wp=data.AI_CURRENT_WAYPOINT
		ai_state=data.AI_TRAFFIC_STATE
		time_zone=data.TIME_ZONE_OFFSET
		speed=data.GROUND_VELOCITY
		type=data.ATC_TYPE
		
		nav1_obs_deg = Number(data.NAV1_OBS_DEG);
		nav2_obs_deg = Number(data.NAV2_OBS_DEG);
		adf_card_deg = Number(data.ADF_CARD_DEG);
		nav1_g3000_freq = Number(data.NAV1_ACTIVE).toFixed(2);
		nav2_g3000_freq = Number(data.NAV2_ACTIVE).toFixed(2);
		adf_g3000_freq = Number(data.ADF_USE);
		
		//COM
		com1_g3000_freq = Number(data.COM1_ACTIVE).toFixed(3);
		com2_g3000_freq = Number(data.COM2_ACTIVE).toFixed(3);
		xpndr_g3000 = data.XPNDR;
		com1_transmit = data.COM1_TRANSMIT;
		com2_transmit = data.COM2_TRANSMIT;
		
		//Altitude
		altitude = data.INDICATED_ALTITUDE;
		
		//Panel
		light_landing = data.LIGHT_LANDING;
		light_taxi = data.LIGHT_TAXI;
		light_strobe = data.LIGHT_STROBE;
		light_nav = data.LIGHT_NAV;
		light_beacon = data.LIGHT_BEACON;
		light_cabin = data.LIGHT_CABIN;
		light_logo = data.LIGHT_LOGO;
		light_panel = data.LIGHT_PANEL;
		light_wing = data.LIGHT_WING;
		light_recognition = data.LIGHT_RECOGNITION;
		pitot_heat = data.PITOT_HEAT;
		eng_anti_ice = data.ENG_ANTI_ICE;
		structural_deice = data.STRUCTURAL_DEICE_SWITCH;
		
		//Other
		landing_vs1 = data.LANDING_VS1;
		landing_t1 = data.LANDING_T1;
		landing_vs2 = data.LANDING_VS2;
		landing_t2 = data.LANDING_T2;
		landing_vs3 = data.LANDING_VS3;
		landing_t3 = data.LANDING_T3;
		sim_rate = data.SIMULATION_RATE;
		
		
		//Flight Plan
		fltpln_arr = data.FLT_PLN;
		gps_next_lat = data.NEXT_WP_LAT;
		gps_next_lon = data.NEXT_WP_LON;
		gps_next_wp_arr = [[latitude, longitude],[gps_next_lat, gps_next_lon]];
		
		//Flight Controls
		gear = data.GEAR_POSITION;
		flaps_position = data.FLAPS_HANDLE_PERCENT;
		spoilers = data.SPOILERS_ARMED;
		
		//JF PA-28R
		if (selected_plane.substring(0, 6) === "PA-28R") {
			JF_PA_28R_LIGHT_BCN = data.JF_PA_28R_LIGHT_BCN;
			JF_PA_28R_AP_HDG = data.JF_PA_28R_AP_HDG;
			JF_PA_28R_AP_NAV = data.JF_PA_28R_AP_NAV;
			JF_PA_28R_AP_ROLL = data.JF_PA_28R_AP_ROLL;
			JF_PA_28R_AP_MODE = data.JF_PA_28R_AP_MODE;
			JF_PA_28R_FUEL_SEL = data.JF_PA_28R_FUEL_SEL;
		}
		//MILVIZ Corsair
		if (selected_plane.substring(0, 5) == "FG-1D") {
			MILVIZ_CORSAIR_OIL_COOLER = data.MILVIZ_CORSAIR_OIL_COOLER;
			MILVIZ_CORSAIR_INTERCOOLER = data.MILVIZ_CORSAIR_INTERCOOLER;
			MILVIZ_CORSAIR_SUPERCHARGER = data.MILVIZ_CORSAIR_SUPERCHARGER;
			MILVIZ_CORSAIR_FUEL_SELECT = data.MILVIZ_CORSAIR_FUEL_SELECT;
			MILVIZ_CORSAIR_LOCK_TAILWHEEL = data.MILVIZ_CORSAIR_LOCK_TAILWHEEL;
			MILVIZ_CORSAIR_GUN_LIGHT = data.MILVIZ_CORSAIR_GUN_LIGHT;
			MILVIZ_CORSAIR_FUEL_PUMP = data.MILVIZ_CORSAIR_FUEL_PUMP;
			MILVIZ_CORSAIR_EXT_LIGHTS = data.MILVIZ_CORSAIR_EXT_LIGHTS;
			MILVIZ_CORSAIR_WING_LIGHTS = data.MILVIZ_CORSAIR_WING_LIGHTS;
			MILVIZ_CORSAIR_TAIL_LIGHTS = data.MILVIZ_CORSAIR_TAIL_LIGHTS;
			MILVIZ_CORSAIR_FORM_LIGHTS = data.MILVIZ_CORSAIR_FORM_LIGHTS;
			MILVIZ_CORSAIR_SECTION_LIGHTS = data.MILVIZ_CORSAIR_SECTION_LIGHTS;
			MILVIZ_CORSAIR_SECSEL_LIGHTS = data.MILVIZ_CORSAIR_SECSEL_LIGHTS;
			MILVIZ_CORSAIR_APP_LIGHTS = data.MILVIZ_CORSAIR_APP_LIGHTS;
			MILVIZ_CORSAIR_COCKPIT_LIGHTS = data.MILVIZ_CORSAIR_COCKPIT_LIGHTS;
			MILVIZ_CORSAIR_CHART_LIGHTS = data.MILVIZ_CORSAIR_CHART_LIGHTS;
			MILVIZ_CORSAIR_LPANEL_LIGHTS = data.MILVIZ_CORSAIR_LPANEL_LIGHTS;
			MILVIZ_CORSAIR_RPANEL_LIGHTS = data.MILVIZ_CORSAIR_RPANEL_LIGHTS;
			MILVIZ_CORSAIR_LINST_LIGHTS = data.MILVIZ_CORSAIR_LINST_LIGHTS;
			MILVIZ_CORSAIR_RINST_LIGHTS = data.MILVIZ_CORSAIR_RINST_LIGHTS;
			MILVIZ_CORSAIR_DEFROST = data.MILVIZ_CORSAIR_DEFROST;
			MILVIZ_CORSAIR_PITOT_HEAT = data.MILVIZ_CORSAIR_PITOT_HEAT;
			MILVIZ_CORSAIR_RECPT = data.MILVIZ_CORSAIR_RECPT;
			MILVIZ_CORSAIR_BNC_LIGHTS = data.MILVIZ_CORSAIR_BNC_LIGHTS;
			MILVIZ_CORSAIR_RECOGN_LIGHTS = data.MILVIZ_CORSAIR_RECOGN_LIGHTS;
			MILVIZ_CORSAIR_LANDING_LIGHTS = data.MILVIZ_CORSAIR_LANDING_LIGHTS;
		}

	});
	return false;
}

// Display sim data which needs to be updated regularly 
function displayData() {
    //Autopilot
    checkAndUpdateButton("#autopilot-master", autopilot_master, "Engaged", "Disengaged");
    checkAndUpdateButton("#autopilot-wing-leveler", autopilot_wing_leveler);
    checkAndUpdateButton("#autopilot-nav1-lock", autopilot_nav1_lock);
    checkAndUpdateButton("#autopilot-heading-lock", autopilot_heading_lock);
    checkAndUpdateButton("#autopilot-altitude-lock", autopilot_altitude_lock);
    checkAndUpdateButton("#autopilot-airspeed-hold", autopilot_airspeed_hold);
    checkAndUpdateButton("#autopilot-attitude-hold", autopilot_attitude_hold);
    checkAndUpdateButton("#autopilot-backcourse-hold", autopilot_backcourse_hold);
    checkAndUpdateButton("#autopilot-approach-hold", autopilot_appr_mode);
    checkAndUpdateButton("#autopilot-vertical-hold", autopilot_vertical_hold);
    checkAndUpdateButton("#autopilot-autothrottle", autopilot_autothrottle);
    checkAndUpdateButton("#autopilot-glideslope-hold", autopilot_glideslope_hold);
    checkAndUpdateButton("#autopilot-yaw-damper", autopilot_yaw_damper);
    checkAndUpdateButton("#autopilot-fd-active", autopilot_flight_director_active);
    checkAndUpdateButton("#com1-transmit", com1_transmit, "COM 1 (On)", "COM 1 (Off)");
    checkAndUpdateButton("#com2-transmit", com2_transmit, "COM 2 (On)", "COM 2 (Off)");
    checkAndUpdateButton("#com1-transmit-direct", com1_transmit, "Transmit COM 1 (On)", "Transmit COM 1 (Off)");
    checkAndUpdateButton("#com2-transmit-direct", com2_transmit, "Transmit COM 2 (On)", "Transmit COM 2 (Off)");
    checkAndUpdateButton("#light-beacon", light_beacon);
    checkAndUpdateButton("#light-landing", light_landing);
    checkAndUpdateButton("#light-taxi", light_taxi);
    checkAndUpdateButton("#light-nav", light_nav);
    checkAndUpdateButton("#light-strobe", light_strobe);
    checkAndUpdateButton("#light-logo", light_logo);
    checkAndUpdateButton("#light-recognition", light_recognition);
    checkAndUpdateButton("#light-wings", light_wing);
    checkAndUpdateButton("#light-cabin", light_cabin);
    checkAndUpdateButton("#light-panel", light_panel);
    checkAndUpdateButton("#pitot-heat-on-of", pitot_heat);
    checkAndUpdateButton("#pitot-heat", pitot_heat, "Pitot Heat (On)", "Pitot Heat (Off)");
    checkAndUpdateButton("#anti-ice", eng_anti_ice, "General Anti-Ice (On)", "General Anti-Ice (Off)");
    checkAndUpdateButton("#structural-deice", structural_deice, "Structural Deice (On)", "Structural Deice (Off)");
    checkAndUpdateButton("#a320-autothrottle", autopilot_autothrottle);
    checkAndUpdateButton("#a320-loc-ap", autopilot_loc_mode);
    checkAndUpdateButton("#a320-appr-ap", autopilot_appr_mode);
    checkAndUpdateButton("#gear", gear, "Gear (Down)", "Gear (Up)");
    checkAndUpdateButton("#spoilers", spoilers, "Spoilers (On)", "Spoilers (Off)");

    $("#autopilot-heading-lock-dir").attr('placeholder', autopilot_heading_lock_dir);
    $("#autopilot-altitude-lock-var").attr('placeholder', autopilot_altitude_lock_var);
    $("#autopilot-airspeed-hold-var").attr('placeholder', autopilot_airspeed_hold_var);
    $("#autopilot-vertical-hold-var").attr('placeholder', autopilot_vertical_hold_var);
	$("#a320-airspeed-hold-var").attr('placeholder', autopilot_airspeed_hold_var);
	$("#a320-heading-lock-dir").attr('placeholder', autopilot_heading_lock_dir);
	$("#a320-altitude-lock-var").attr('placeholder', autopilot_altitude_lock_var);
	$("#a320-vertical-hold-var").attr('placeholder', autopilot_vertical_hold_var);
	
	//NAV Swap
	$("#ADF_heading").attr('placeholder', adf_card_deg);
	$("#OBS_1_heading").attr('placeholder', nav1_obs_deg);
	$("#OBS_2_heading").attr('placeholder', nav2_obs_deg);
	
	//NAV Direct
	$("#NAV1_freq").attr('placeholder', nav1_g3000_freq);
	$("#OBS1_G3_heading").attr('placeholder', nav1_obs_deg);
	$("#NAV2_freq").attr('placeholder', nav2_g3000_freq);
	$("#OBS2_G3_heading").attr('placeholder', nav2_obs_deg);
	$("#ADF_freq").attr('placeholder', adf_g3000_freq);
	$("#ADF_direct_heading").attr('placeholder', adf_card_deg);
	
	//COM Direct
	$("#COM1_freq").attr('placeholder', com1_g3000_freq);
	$("#COM2_freq").attr('placeholder', com2_g3000_freq);
	$("#XPNDR_g3000").attr('placeholder', xpndr_g3000);
	$("#XPNDR_g3000_tune").attr('placeholder', xpndr_g3000);
	
	//Other/Data
	$("#cur_ias").text(airspeed_indicated);
	$("#cur_alt").text(altitude);
	$("#cur_hdg").text(plane_heading_degrees);
	$("#cur_time").text(zulu_time);
	$("#cur_speed").text(airspeed_mach);
	$("#cur_eta").text(eta);
	$("#cur_lat").text(lat);
	$("#cur_lon").text(lon);
	$("#cur_ete").text(ete);
	$("#cur_temp").text(ambient_temperature);
	$("#cur_gps").text(gps_ete);
	$("#cur_gp").text(gps_eta);
	$("#cur_airp").text(airport);
	$("#cur_traf").text(ai);
	$("#cur_airl").text(ai_airline);
	$("#cur_numb").text(ai_flightNumber);
	$("#cur_weight").text(totalWeight);
	$("#cur_press").text(baro_pressure);
	$("#cur_velo").text(velo);
	$("#cur_ice").text(ice);
	$("#cur_plan").text(fltpln_arr);
	$("#cur_zone").text(time_zone);
	$("#cur_speed").text(speed);
	$("#cur_type").text(type);
	$("#flaps-position").text(flaps_position + "%");
	$("#landing-vs1").text(landing_vs1);
	$("#landing-t1").text(landing_t1);
	$("#landing-vs2").text(landing_vs2);
	$("#landing-t2").text(landing_t2);
	$("#landing-vs3").text(landing_vs3);
	$("#landing-t3").text(landing_t3);
	$("#sim-rate").text(sim_rate);
	
	//JF PA-28R
	if (selected_plane.substring(0, 6) == "PA-28R") {
		checkAndUpdateButton("#jf_pa28_bcn_light", JF_PA_28R_LIGHT_BCN);
		checkAndUpdateButton("#jf_pa28_ap_hdg", JF_PA_28R_AP_HDG);
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_nav", JF_PA_28R_AP_MODE, 0, onBtn="btn-light", offBtn="btn-secondary", onText="NAV", offText="NAV");
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_omni", JF_PA_28R_AP_MODE, 1, onBtn="btn-light", offBtn="btn-secondary", onText="OMNI", offText="OMNI");
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_hdg", JF_PA_28R_AP_MODE, 2, onBtn="btn-light", offBtn="btn-secondary", onText="HDG", offText="HDG");
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_locn", JF_PA_28R_AP_MODE, 3, onBtn="btn-light", offBtn="btn-secondary", onText="LOC-N", offText="LOC-N");
		checkAndUpdateButtonCustom("#jf_pa28_ap_mode_locr", JF_PA_28R_AP_MODE, 4, onBtn="btn-light", offBtn="btn-secondary", onText="LOC-R", offText="LOC-R");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_l30", JF_PA_28R_AP_ROLL, 0, onBtn="btn-light", offBtn="btn-secondary", onText="L30°", offText="L30°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_l20", JF_PA_28R_AP_ROLL, 10, onBtn="btn-light", offBtn="btn-secondary", onText="L20°", offText="L20°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_l10", JF_PA_28R_AP_ROLL, 20, onBtn="btn-light", offBtn="btn-secondary", onText="L10°", offText="L10°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_off", JF_PA_28R_AP_ROLL, 30, onBtn="btn-light", offBtn="btn-secondary", onText="OFF", offText="OFF");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_r10", JF_PA_28R_AP_ROLL, 40, onBtn="btn-light", offBtn="btn-secondary", onText="R10°", offText="R10°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_r20", JF_PA_28R_AP_ROLL, 50, onBtn="btn-light", offBtn="btn-secondary", onText="R20°", offText="R20°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_roll_r30", JF_PA_28R_AP_ROLL, 60, onBtn="btn-light", offBtn="btn-secondary", onText="R30°", offText="R30°");
		checkAndUpdateButtonCustom("#jf_pa28_ap_nav1", JF_PA_28R_AP_NAV, 0, onBtn="btn-light", offBtn="btn-secondary", onText="NAV1", offText="NAV1");
		checkAndUpdateButtonCustom("#jf_pa28_ap_nav2", JF_PA_28R_AP_NAV, 2, onBtn="btn-light", offBtn="btn-secondary", onText="NAV2", offText="NAV2");
		checkAndUpdateButtonCustom("#jf_pa28_ap_off", JF_PA_28R_AP_NAV, 1, onBtn="btn-light", offBtn="btn-secondary", onText="OFF", offText="OFF");
		checkAndUpdateButtonCustom("#jf_pa28_fuel_cut", JF_PA_28R_FUEL_SEL, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Cut", offText="Cut");
		checkAndUpdateButtonCustom("#jf_pa28_fuel_left", JF_PA_28R_FUEL_SEL, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Left", offText="Left");
		checkAndUpdateButtonCustom("#jf_pa28_fuel_right", JF_PA_28R_FUEL_SEL, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Right", offText="Right");
	}
	
	//MILVIZ Corsair
	if (selected_plane.substring(0, 5) == "FG-1D") {
		$("#milviz_corsair_supercharger").text(Math.round(MILVIZ_CORSAIR_SUPERCHARGER) + "%");
		$("#milviz_corsair_oilcooler").text(Math.round(MILVIZ_CORSAIR_OIL_COOLER) + "%");
		$("#milviz_corsair_intercooler").text(Math.round(MILVIZ_CORSAIR_INTERCOOLER) + "%");
		$("#milviz_corsair_chartb").text(Math.round(MILVIZ_CORSAIR_CHART_LIGHTS) + "%");
		$("#milviz_corsair_lpanel").text(Math.round(MILVIZ_CORSAIR_LPANEL_LIGHTS) + "%");
		$("#milviz_corsair_rpanel").text(Math.round(MILVIZ_CORSAIR_RPANEL_LIGHTS) + "%");
		$("#milviz_corsair_linst").text(Math.round(MILVIZ_CORSAIR_LINST_LIGHTS) + "%");
		$("#milviz_corsair_rinst").text(Math.round(MILVIZ_CORSAIR_RINST_LIGHTS) + "%");
		checkAndUpdateButton("#milviz_corsair_fuel_pump", MILVIZ_CORSAIR_FUEL_PUMP);
		checkAndUpdateButton("#milviz_corsair_dive_brake", spoilers, "Dive Brake (On)", "Dive Brake (Off)");
		checkAndUpdateButton("#milviz_corsair_tail_wheel", MILVIZ_CORSAIR_LOCK_TAILWHEEL, "Lock Tail Wheel (On)", "Lock Tail Wheel (Off)");
		checkAndUpdateButton("#milviz_corsair_cockpit_lights", MILVIZ_CORSAIR_COCKPIT_LIGHTS, "Cockpit Lights (On)", "Cockpit Lights (Off)");
		checkAndUpdateButton("#milviz_corsair_defrost", MILVIZ_CORSAIR_DEFROST, "Defrost (On)", "Defrost (Off)");
		checkAndUpdateButton("#milviz_corsair_pitotheat", MILVIZ_CORSAIR_PITOT_HEAT, "Pitot Heat (On)", "Pitot Heat (Off)");
		checkAndUpdateButton("#milviz_corsair_recpt", MILVIZ_CORSAIR_RECPT, "Recpt (On)", "Recpt (Off)");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_off", MILVIZ_CORSAIR_FUEL_SELECT, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_main", MILVIZ_CORSAIR_FUEL_SELECT, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Main", offText="Main");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_reserve", MILVIZ_CORSAIR_FUEL_SELECT, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Reserve", offText="Reserve");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_lh", MILVIZ_CORSAIR_FUEL_SELECT, 3, onBtn="btn-light", offBtn="btn-secondary", onText="L.H.Wing", offText="L.H.Wing");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_rh", MILVIZ_CORSAIR_FUEL_SELECT, 4, onBtn="btn-light", offBtn="btn-secondary", onText="R.H.Wing", offText="R.H.Wing");
		checkAndUpdateButtonCustom("#milviz_corsair_fuel_cntr", MILVIZ_CORSAIR_FUEL_SELECT, 5, onBtn="btn-light", offBtn="btn-secondary", onText="Cntr Drop", offText="Cntr Drop");
		checkAndUpdateButtonCustom("#milviz_corsair_bcn_down", MILVIZ_CORSAIR_BNC_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Down", offText="Down");
		checkAndUpdateButtonCustom("#milviz_corsair_bcn_off", MILVIZ_CORSAIR_BNC_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_bcn_red", MILVIZ_CORSAIR_BNC_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Red", offText="Red");
		checkAndUpdateButtonCustom("#milviz_corsair_recogn_steady", MILVIZ_CORSAIR_RECOGN_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Steady", offText="Steady");
		checkAndUpdateButtonCustom("#milviz_corsair_recogn_off", MILVIZ_CORSAIR_RECOGN_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_recogn_flash", MILVIZ_CORSAIR_RECOGN_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Flash", offText="Flash");
		checkAndUpdateButtonCustom("#milviz_corsair_landing_on", MILVIZ_CORSAIR_LANDING_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="On", offText="On");
		checkAndUpdateButtonCustom("#milviz_corsair_landing_off", MILVIZ_CORSAIR_LANDING_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_landing_amber", MILVIZ_CORSAIR_LANDING_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Amber", offText="Amber");
		checkAndUpdateButtonCustom("#milviz_corsair_extl_steady", MILVIZ_CORSAIR_EXT_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Steady", offText="Steady");
		checkAndUpdateButtonCustom("#milviz_corsair_extl_off", MILVIZ_CORSAIR_EXT_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_extl_flash", MILVIZ_CORSAIR_EXT_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Flash", offText="Flash");
		checkAndUpdateButtonCustom("#milviz_corsair_wing_brigth", MILVIZ_CORSAIR_WING_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Bright", offText="Bright");
		checkAndUpdateButtonCustom("#milviz_corsair_wing_off", MILVIZ_CORSAIR_WING_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_wing_dim", MILVIZ_CORSAIR_WING_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Dim", offText="Dim");
		checkAndUpdateButtonCustom("#milviz_corsair_tail_bright", MILVIZ_CORSAIR_TAIL_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Bright", offText="Bright");
		checkAndUpdateButtonCustom("#milviz_corsair_tail_off", MILVIZ_CORSAIR_TAIL_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_tail_dim", MILVIZ_CORSAIR_TAIL_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Dim", offText="Dim");
		checkAndUpdateButtonCustom("#milviz_corsair_form_bright", MILVIZ_CORSAIR_FORM_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Bright", offText="Bright");
		checkAndUpdateButtonCustom("#milviz_corsair_form_off", MILVIZ_CORSAIR_FORM_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_form_dim", MILVIZ_CORSAIR_FORM_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Dim", offText="Dim");
		checkAndUpdateButtonCustom("#milviz_corsair_section_bright", MILVIZ_CORSAIR_SECTION_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Bright", offText="Bright");
		checkAndUpdateButtonCustom("#milviz_corsair_section_off", MILVIZ_CORSAIR_SECTION_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_section_dim", MILVIZ_CORSAIR_SECTION_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Dim", offText="Dim");
		checkAndUpdateButtonCustom("#milviz_corsair_secsel_steady", MILVIZ_CORSAIR_SECSEL_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Bright", offText="Bright");
		checkAndUpdateButtonCustom("#milviz_corsair_secsel_off", MILVIZ_CORSAIR_SECSEL_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_secsel_code", MILVIZ_CORSAIR_SECSEL_LIGHTS, 2, onBtn="btn-light", offBtn="btn-secondary", onText="Dim", offText="Dim");
		checkAndUpdateButtonCustom("#milviz_corsair_app_off", MILVIZ_CORSAIR_APP_LIGHTS, 0, onBtn="btn-light", offBtn="btn-secondary", onText="Off", offText="Off");
		checkAndUpdateButtonCustom("#milviz_corsair_app_on", MILVIZ_CORSAIR_APP_LIGHTS, 1, onBtn="btn-light", offBtn="btn-secondary", onText="On", offText="On");
		
	}
}

function checkAndUpdateButton(buttonName, variableToCheck, onText="On", offText="Off") {
    if (variableToCheck === 1) {
        $(buttonName).removeClass("btn-danger").addClass("btn-success").html(onText);
    } else {
        $(buttonName).removeClass("btn-success").addClass("btn-danger").html(offText);
    }
}

function checkAndUpdateButtonCustom(buttonName, variableToCheck, variableTrue=1, onBtn="btn-light", offBtn="btn-secondary", onText="On", offText="Off") {
    if (variableToCheck === variableTrue) {
        $(buttonName).removeClass(offBtn).addClass(onBtn).html(onText);
    } else {
        $(buttonName).removeClass(onBtn).addClass(offBtn).html(offText);
    }
}

function toggleFollowPlane() {
    followPlane = !followPlane;
    if (followPlane === true) {
        $("#followMode").text("Unfollow Plane")
        $("#followModeButton").removeClass("btn-danger").addClass("btn-primary")
    }
    if (followPlane === false) {
        $("#followMode").text("Follow Plane")
        $("#followModeButton").removeClass("btn-primary").addClass("btn-danger")
    }
}

function toggleGPStrack() {
    trackGPS = !trackGPS;
    if (trackGPS === true) {
        $("#GPStrackButton").removeClass("btn-danger").addClass("btn-primary");
        trackline.setStyle({opacity: 1.0});
    }
    if (trackGPS === false) {
        $("#GPStrackButton").removeClass("btn-primary").addClass("btn-danger")
        trackline.setStyle({opacity: 0});
    }
}


		
		
		

	
function updateMap() {
    var pos = L.latLng(latitude, longitude);

    marker.slideTo( [latitude, longitude], {
        duration: 200, keepAtCenter: false
    });
    marker.setRotationAngle(compass);
	

    if (followPlane === true) {
        map.panTo(pos);
    };
    // Trackline Update
    trackline.addLatLng([latitude, longitude]);
    
    // Trackline clear when distance between points > 2000m (MSFS places the plane in menu to 0,0)
    tracklinelen = trackline.getLatLngs().length;
    if (tracklinelen > 1) {
        if (trackline.getLatLngs()[tracklinelen - 1].distanceTo(trackline.getLatLngs()[tracklinelen - 2]) > 2000) {
            trackline.setLatLngs([]);
            // Force Frequecy Sync
            syncRadio();
        }
    };
    
    // GPS Next WP Polyline Update
    if (gps_next_wp_arr[1] != null) {
        gpswp.setLatLngs(gps_next_wp_arr);
    }
}

function refreshMapSize() {
	setInterval(function () {
	map.invalidateSize();
	}, 1000);
}
function setSimDatapoint(datapointToSet, valueToUse) {
    url_to_call = "/datapoint/"+datapointToSet+"/set";
    $.post( url_to_call, { value_to_use: valueToUse } );
}

function triggerSimEvent(eventToTrigger, valueToUse, hideAlert = false){
    url_to_call = "/event/"+eventToTrigger+"/trigger";
    $.post( url_to_call, { value_to_use: valueToUse } );

    if (!hideAlert) {
        temporaryAlert('', "Sending instruction", "success")
    }
}

function triggerSimEventFromField(eventToTrigger, fieldToUse, messageToDisplay = null){
    // Get the field and the value in there
    fieldToUse = "#" + fieldToUse
    valueToUse = $(fieldToUse).val();

    // Pass it to the API
    url_to_call = "/event/"+eventToTrigger+"/trigger";
    $.post( url_to_call, { value_to_use: valueToUse } );

    // Clear the field so it can be repopulated with the placeholder
    //$(fieldToUse).val("")

    if (messageToDisplay) {
        temporaryAlert('', messageToDisplay + " to " + valueToUse, "success")
    }

}

function triggerSimEventFromVar(eventToTrigger, VarToUse, messageToDisplay = null){
    // Get the field and the value in there
    valueToUse = VarToUse;

    // Pass it to the API
    url_to_call = "/event/"+eventToTrigger+"/trigger";
    $.post( url_to_call, { value_to_use: valueToUse } );

    // Clear the field so it can be repopulated with the placeholder
    //$(fieldToUse).val("")

    if (messageToDisplay) {
        temporaryAlert('', messageToDisplay + " to " + valueToUse, "success")
    }

}

function triggerCustomEmergency(emergency_type) {
    url_to_call = "/custom_emergency/" + emergency_type
    $.post (url_to_call)

    if (emergency_type === "random_engine_fire") {
        temporaryAlert("Fire!", "Random engine fire trigger sent", "error")
    }
}


function temporaryAlert(title, message, icon, timer = 1000) {
    let timerInterval

    Swal.fire({
        title: title,
        html: message,
        icon: icon,
        timer: timer,
        timerProgressBar: true,
        onBeforeOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getContent()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, timer)
        },
        onClose: () => {
            clearInterval(timerInterval)
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



function presshold(action, start, speedup, minspeed) {

    var repeat = function () {
        action();
        btnhold = setTimeout(repeat, start);
        start = Math.max(start * speedup, minspeed);
    }

    repeat()
};

function presshold2(action, action2, start, speedup, minspeed) {

    var repeat = function () {
        action();
        action2();
        btnhold = setTimeout(repeat, start);
        start = Math.max(start * speedup, minspeed);
    }

    repeat()
};

function releasehold() {
    clearTimeout(btnhold);
}

function elevatorPlus() {
	$("#TrimElevator").val(parseInt($("#TrimElevator").val())-100);
	triggerSimEvent('AXIS_ELEV_TRIM_SET',$("#TrimElevator").val(),true);
}

function elevatorMinus() {
	$("#TrimElevator").val(parseInt($("#TrimElevator").val())+100);
	triggerSimEvent('AXIS_ELEV_TRIM_SET',$("#TrimElevator").val(),true);
}

function elevatorReset() {
	$("#TrimElevator").val(0);
	triggerSimEvent('AXIS_ELEV_TRIM_SET',$("#TrimElevator").val(),true);
}

function rudderPlus() {
	$("#TrimRudder").val(parseInt($("#TrimRudder").val())+1);
	triggerSimEvent('RUDDER_TRIM_SET',$("#TrimRudder").val(),true);
}

function rudderMinus() {
	$("#TrimRudder").val(parseInt($("#TrimRudder").val())-1);
	triggerSimEvent('RUDDER_TRIM_SET',$("#TrimRudder").val(),true);
}

function rudderReset() {
	$("#TrimRudder").val(0);
	triggerSimEvent('RUDDER_TRIM_SET',$("#TrimRudder").val(),true);
}

function aileronPlus() {
	$("#TrimAileron").val(parseInt($("#TrimAileron").val())+1);
	triggerSimEvent('AILERON_TRIM_SET',$("#TrimAileron").val(),true);
}

function aileronMinus() {
	$("#TrimAileron").val(parseInt($("#TrimAileron").val())-1);
	triggerSimEvent('AILERON_TRIM_SET',$("#TrimAileron").val(),true);
}

function aileronReset() {
	$("#TrimAileron").val(0);
	triggerSimEvent('AILERON_TRIM_SET',$("#TrimAileron").val(),true);
}
