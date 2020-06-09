

/**
 * Clutter
 */
import * as GObject from "gobject";
import * as Gio from "gio";
import * as GLib from "glib";
import * as Atk from "atk";
import * as cairo from "cairo";
import * as Pango from "pango";
import * as Json from "json";
import * as Cogl from "cogl";

type GType = object;

export const __0: number;

export const __1: number;

export const __2: number;

export const __3: number;

export const __3270_AltCursor: number;

export const __3270_Attn: number;

export const __3270_BackTab: number;

export const __3270_ChangeScreen: number;

export const __3270_Copy: number;

export const __3270_CursorBlink: number;

export const __3270_CursorSelect: number;

export const __3270_DeleteWord: number;

export const __3270_Duplicate: number;

export const __3270_Enter: number;

export const __3270_EraseEOF: number;

export const __3270_EraseInput: number;

export const __3270_ExSelect: number;

export const __3270_FieldMark: number;

export const __3270_Ident: number;

export const __3270_Jump: number;

export const __3270_KeyClick: number;

export const __3270_Left2: number;

export const __3270_PA1: number;

export const __3270_PA2: number;

export const __3270_PA3: number;

export const __3270_Play: number;

export const __3270_PrintScreen: number;

export const __3270_Quit: number;

export const __3270_Record: number;

export const __3270_Reset: number;

export const __3270_Right2: number;

export const __3270_Rule: number;

export const __3270_Setup: number;

export const __3270_Test: number;

export const __4: number;

export const __5: number;

export const __6: number;

export const __7: number;

export const __8: number;

export const __9: number;

export const A: number;

export const AE: number;

export const Aacute: number;

export const Abelowdot: number;

export const Abreve: number;

export const Abreveacute: number;

export const Abrevebelowdot: number;

export const Abrevegrave: number;

export const Abrevehook: number;

export const Abrevetilde: number;

export const AccessX_Enable: number;

export const AccessX_Feedback_Enable: number;

export const Acircumflex: number;

export const Acircumflexacute: number;

export const Acircumflexbelowdot: number;

export const Acircumflexgrave: number;

export const Acircumflexhook: number;

export const Acircumflextilde: number;

export const AddFavorite: number;

export const Adiaeresis: number;

export const Agrave: number;

export const Ahook: number;

export const Alt_L: number;

export const Alt_R: number;

export const Amacron: number;

export const Aogonek: number;

export const ApplicationLeft: number;

export const ApplicationRight: number;

export const Arabic_0: number;

export const Arabic_1: number;

export const Arabic_2: number;

export const Arabic_3: number;

export const Arabic_4: number;

export const Arabic_5: number;

export const Arabic_6: number;

export const Arabic_7: number;

export const Arabic_8: number;

export const Arabic_9: number;

export const Arabic_ain: number;

export const Arabic_alef: number;

export const Arabic_alefmaksura: number;

export const Arabic_beh: number;

export const Arabic_comma: number;

export const Arabic_dad: number;

export const Arabic_dal: number;

export const Arabic_damma: number;

export const Arabic_dammatan: number;

export const Arabic_ddal: number;

export const Arabic_farsi_yeh: number;

export const Arabic_fatha: number;

export const Arabic_fathatan: number;

export const Arabic_feh: number;

export const Arabic_fullstop: number;

export const Arabic_gaf: number;

export const Arabic_ghain: number;

export const Arabic_ha: number;

export const Arabic_hah: number;

export const Arabic_hamza: number;

export const Arabic_hamza_above: number;

export const Arabic_hamza_below: number;

export const Arabic_hamzaonalef: number;

export const Arabic_hamzaonwaw: number;

export const Arabic_hamzaonyeh: number;

export const Arabic_hamzaunderalef: number;

export const Arabic_heh: number;

export const Arabic_heh_doachashmee: number;

export const Arabic_heh_goal: number;

export const Arabic_jeem: number;

export const Arabic_jeh: number;

export const Arabic_kaf: number;

export const Arabic_kasra: number;

export const Arabic_kasratan: number;

export const Arabic_keheh: number;

export const Arabic_khah: number;

export const Arabic_lam: number;

export const Arabic_madda_above: number;

export const Arabic_maddaonalef: number;

export const Arabic_meem: number;

export const Arabic_noon: number;

export const Arabic_noon_ghunna: number;

export const Arabic_peh: number;

export const Arabic_percent: number;

export const Arabic_qaf: number;

export const Arabic_question_mark: number;

export const Arabic_ra: number;

export const Arabic_rreh: number;

export const Arabic_sad: number;

export const Arabic_seen: number;

export const Arabic_semicolon: number;

export const Arabic_shadda: number;

export const Arabic_sheen: number;

export const Arabic_sukun: number;

export const Arabic_superscript_alef: number;

export const Arabic_switch: number;

export const Arabic_tah: number;

export const Arabic_tatweel: number;

export const Arabic_tcheh: number;

export const Arabic_teh: number;

export const Arabic_tehmarbuta: number;

export const Arabic_thal: number;

export const Arabic_theh: number;

export const Arabic_tteh: number;

export const Arabic_veh: number;

export const Arabic_waw: number;

export const Arabic_yeh: number;

export const Arabic_yeh_baree: number;

export const Arabic_zah: number;

export const Arabic_zain: number;

export const Aring: number;

export const Armenian_AT: number;

export const Armenian_AYB: number;

export const Armenian_BEN: number;

export const Armenian_CHA: number;

export const Armenian_DA: number;

export const Armenian_DZA: number;

export const Armenian_E: number;

export const Armenian_FE: number;

export const Armenian_GHAT: number;

export const Armenian_GIM: number;

export const Armenian_HI: number;

export const Armenian_HO: number;

export const Armenian_INI: number;

export const Armenian_JE: number;

export const Armenian_KE: number;

export const Armenian_KEN: number;

export const Armenian_KHE: number;

export const Armenian_LYUN: number;

export const Armenian_MEN: number;

export const Armenian_NU: number;

export const Armenian_O: number;

export const Armenian_PE: number;

export const Armenian_PYUR: number;

export const Armenian_RA: number;

export const Armenian_RE: number;

export const Armenian_SE: number;

export const Armenian_SHA: number;

export const Armenian_TCHE: number;

export const Armenian_TO: number;

export const Armenian_TSA: number;

export const Armenian_TSO: number;

export const Armenian_TYUN: number;

export const Armenian_VEV: number;

export const Armenian_VO: number;

export const Armenian_VYUN: number;

export const Armenian_YECH: number;

export const Armenian_ZA: number;

export const Armenian_ZHE: number;

export const Armenian_accent: number;

export const Armenian_amanak: number;

export const Armenian_apostrophe: number;

export const Armenian_at: number;

export const Armenian_ayb: number;

export const Armenian_ben: number;

export const Armenian_but: number;

export const Armenian_cha: number;

export const Armenian_da: number;

export const Armenian_dza: number;

export const Armenian_e: number;

export const Armenian_exclam: number;

export const Armenian_fe: number;

export const Armenian_full_stop: number;

export const Armenian_ghat: number;

export const Armenian_gim: number;

export const Armenian_hi: number;

export const Armenian_ho: number;

export const Armenian_hyphen: number;

export const Armenian_ini: number;

export const Armenian_je: number;

export const Armenian_ke: number;

export const Armenian_ken: number;

export const Armenian_khe: number;

export const Armenian_ligature_ew: number;

export const Armenian_lyun: number;

export const Armenian_men: number;

export const Armenian_nu: number;

export const Armenian_o: number;

export const Armenian_paruyk: number;

export const Armenian_pe: number;

export const Armenian_pyur: number;

export const Armenian_question: number;

export const Armenian_ra: number;

export const Armenian_re: number;

export const Armenian_se: number;

export const Armenian_separation_mark: number;

export const Armenian_sha: number;

export const Armenian_shesht: number;

export const Armenian_tche: number;

export const Armenian_to: number;

export const Armenian_tsa: number;

export const Armenian_tso: number;

export const Armenian_tyun: number;

export const Armenian_verjaket: number;

export const Armenian_vev: number;

export const Armenian_vo: number;

export const Armenian_vyun: number;

export const Armenian_yech: number;

export const Armenian_yentamna: number;

export const Armenian_za: number;

export const Armenian_zhe: number;

export const Atilde: number;

export const AudibleBell_Enable: number;

export const AudioCycleTrack: number;

export const AudioForward: number;

export const AudioLowerVolume: number;

export const AudioMedia: number;

export const AudioMicMute: number;

export const AudioMute: number;

export const AudioNext: number;

export const AudioPause: number;

export const AudioPlay: number;

export const AudioPrev: number;

export const AudioRaiseVolume: number;

export const AudioRandomPlay: number;

export const AudioRecord: number;

export const AudioRepeat: number;

export const AudioRewind: number;

export const AudioStop: number;

export const Away: number;

export const B: number;

export const BUTTON_MIDDLE: number;

export const BUTTON_PRIMARY: number;

export const BUTTON_SECONDARY: number;

export const Babovedot: number;

export const Back: number;

export const BackForward: number;

export const BackSpace: number;

export const Battery: number;

export const Begin: number;

export const Blue: number;

export const Bluetooth: number;

export const Book: number;

export const BounceKeys_Enable: number;

export const Break: number;

export const BrightnessAdjust: number;

export const Byelorussian_SHORTU: number;

export const Byelorussian_shortu: number;

export const C: number;

export const CD: number;

export const CH: number;

export const COGL: string;

export const CURRENT_TIME: number;

export const C_H: number;

export const C_h: number;

export const Cabovedot: number;

export const Cacute: number;

export const Calculator: number;

export const Calendar: number;

export const Cancel: number;

export const Caps_Lock: number;

export const Ccaron: number;

export const Ccedilla: number;

export const Ccircumflex: number;

export const Ch: number;

export const Clear: number;

export const ClearGrab: number;

export const Close: number;

export const Codeinput: number;

export const ColonSign: number;

export const Community: number;

export const ContrastAdjust: number;

export const Control_L: number;

export const Control_R: number;

export const Copy: number;

export const CruzeiroSign: number;

export const Cut: number;

export const CycleAngle: number;

export const Cyrillic_A: number;

export const Cyrillic_BE: number;

export const Cyrillic_CHE: number;

export const Cyrillic_CHE_descender: number;

export const Cyrillic_CHE_vertstroke: number;

export const Cyrillic_DE: number;

export const Cyrillic_DZHE: number;

export const Cyrillic_E: number;

export const Cyrillic_EF: number;

export const Cyrillic_EL: number;

export const Cyrillic_EM: number;

export const Cyrillic_EN: number;

export const Cyrillic_EN_descender: number;

export const Cyrillic_ER: number;

export const Cyrillic_ES: number;

export const Cyrillic_GHE: number;

export const Cyrillic_GHE_bar: number;

export const Cyrillic_HA: number;

export const Cyrillic_HARDSIGN: number;

export const Cyrillic_HA_descender: number;

export const Cyrillic_I: number;

export const Cyrillic_IE: number;

export const Cyrillic_IO: number;

export const Cyrillic_I_macron: number;

export const Cyrillic_JE: number;

export const Cyrillic_KA: number;

export const Cyrillic_KA_descender: number;

export const Cyrillic_KA_vertstroke: number;

export const Cyrillic_LJE: number;

export const Cyrillic_NJE: number;

export const Cyrillic_O: number;

export const Cyrillic_O_bar: number;

export const Cyrillic_PE: number;

export const Cyrillic_SCHWA: number;

export const Cyrillic_SHA: number;

export const Cyrillic_SHCHA: number;

export const Cyrillic_SHHA: number;

export const Cyrillic_SHORTI: number;

export const Cyrillic_SOFTSIGN: number;

export const Cyrillic_TE: number;

export const Cyrillic_TSE: number;

export const Cyrillic_U: number;

export const Cyrillic_U_macron: number;

export const Cyrillic_U_straight: number;

export const Cyrillic_U_straight_bar: number;

export const Cyrillic_VE: number;

export const Cyrillic_YA: number;

export const Cyrillic_YERU: number;

export const Cyrillic_YU: number;

export const Cyrillic_ZE: number;

export const Cyrillic_ZHE: number;

export const Cyrillic_ZHE_descender: number;

export const Cyrillic_a: number;

export const Cyrillic_be: number;

export const Cyrillic_che: number;

export const Cyrillic_che_descender: number;

export const Cyrillic_che_vertstroke: number;

export const Cyrillic_de: number;

export const Cyrillic_dzhe: number;

export const Cyrillic_e: number;

export const Cyrillic_ef: number;

export const Cyrillic_el: number;

export const Cyrillic_em: number;

export const Cyrillic_en: number;

export const Cyrillic_en_descender: number;

export const Cyrillic_er: number;

export const Cyrillic_es: number;

export const Cyrillic_ghe: number;

export const Cyrillic_ghe_bar: number;

export const Cyrillic_ha: number;

export const Cyrillic_ha_descender: number;

export const Cyrillic_hardsign: number;

export const Cyrillic_i: number;

export const Cyrillic_i_macron: number;

export const Cyrillic_ie: number;

export const Cyrillic_io: number;

export const Cyrillic_je: number;

export const Cyrillic_ka: number;

export const Cyrillic_ka_descender: number;

export const Cyrillic_ka_vertstroke: number;

export const Cyrillic_lje: number;

export const Cyrillic_nje: number;

export const Cyrillic_o: number;

export const Cyrillic_o_bar: number;

export const Cyrillic_pe: number;

export const Cyrillic_schwa: number;

export const Cyrillic_sha: number;

export const Cyrillic_shcha: number;

export const Cyrillic_shha: number;

export const Cyrillic_shorti: number;

export const Cyrillic_softsign: number;

export const Cyrillic_te: number;

export const Cyrillic_tse: number;

export const Cyrillic_u: number;

export const Cyrillic_u_macron: number;

export const Cyrillic_u_straight: number;

export const Cyrillic_u_straight_bar: number;

export const Cyrillic_ve: number;

export const Cyrillic_ya: number;

export const Cyrillic_yeru: number;

export const Cyrillic_yu: number;

export const Cyrillic_ze: number;

export const Cyrillic_zhe: number;

export const Cyrillic_zhe_descender: number;

export const D: number;

export const DOS: number;

export const Dabovedot: number;

export const Dcaron: number;

export const Delete: number;

export const Display: number;

export const Documents: number;

export const DongSign: number;

export const Down: number;

export const Dstroke: number;

export const E: number;

export const ENG: number;

export const ETH: number;

export const EVENT_PROPAGATE: boolean;

export const EVENT_STOP: boolean;

export const EZH: number;

export const Eabovedot: number;

export const Eacute: number;

export const Ebelowdot: number;

export const Ecaron: number;

export const Ecircumflex: number;

export const Ecircumflexacute: number;

export const Ecircumflexbelowdot: number;

export const Ecircumflexgrave: number;

export const Ecircumflexhook: number;

export const Ecircumflextilde: number;

export const EcuSign: number;

export const Ediaeresis: number;

export const Egrave: number;

export const Ehook: number;

export const Eisu_Shift: number;

export const Eisu_toggle: number;

export const Eject: number;

export const Emacron: number;

export const End: number;

export const Eogonek: number;

export const Escape: number;

export const Eth: number;

export const Etilde: number;

export const EuroSign: number;

export const Excel: number;

export const Execute: number;

export const Explorer: number;

export const F: number;

export const F1: number;

export const F10: number;

export const F11: number;

export const F12: number;

export const F13: number;

export const F14: number;

export const F15: number;

export const F16: number;

export const F17: number;

export const F18: number;

export const F19: number;

export const F2: number;

export const F20: number;

export const F21: number;

export const F22: number;

export const F23: number;

export const F24: number;

export const F25: number;

export const F26: number;

export const F27: number;

export const F28: number;

export const F29: number;

export const F3: number;

export const F30: number;

export const F31: number;

export const F32: number;

export const F33: number;

export const F34: number;

export const F35: number;

export const F4: number;

export const F5: number;

export const F6: number;

export const F7: number;

export const F8: number;

export const F9: number;

export const FFrancSign: number;

export const FLAVOUR: string;

export const Fabovedot: number;

export const Farsi_0: number;

export const Farsi_1: number;

export const Farsi_2: number;

export const Farsi_3: number;

export const Farsi_4: number;

export const Farsi_5: number;

export const Farsi_6: number;

export const Farsi_7: number;

export const Farsi_8: number;

export const Farsi_9: number;

export const Farsi_yeh: number;

export const Favorites: number;

export const Finance: number;

export const Find: number;

export const First_Virtual_Screen: number;

export const Forward: number;

export const FrameBack: number;

export const FrameForward: number;

export const G: number;

export const Gabovedot: number;

export const Game: number;

export const Gbreve: number;

export const Gcaron: number;

export const Gcedilla: number;

export const Gcircumflex: number;

export const Georgian_an: number;

export const Georgian_ban: number;

export const Georgian_can: number;

export const Georgian_char: number;

export const Georgian_chin: number;

export const Georgian_cil: number;

export const Georgian_don: number;

export const Georgian_en: number;

export const Georgian_fi: number;

export const Georgian_gan: number;

export const Georgian_ghan: number;

export const Georgian_hae: number;

export const Georgian_har: number;

export const Georgian_he: number;

export const Georgian_hie: number;

export const Georgian_hoe: number;

export const Georgian_in: number;

export const Georgian_jhan: number;

export const Georgian_jil: number;

export const Georgian_kan: number;

export const Georgian_khar: number;

export const Georgian_las: number;

export const Georgian_man: number;

export const Georgian_nar: number;

export const Georgian_on: number;

export const Georgian_par: number;

export const Georgian_phar: number;

export const Georgian_qar: number;

export const Georgian_rae: number;

export const Georgian_san: number;

export const Georgian_shin: number;

export const Georgian_tan: number;

export const Georgian_tar: number;

export const Georgian_un: number;

export const Georgian_vin: number;

export const Georgian_we: number;

export const Georgian_xan: number;

export const Georgian_zen: number;

export const Georgian_zhar: number;

export const Go: number;

export const Greek_ALPHA: number;

export const Greek_ALPHAaccent: number;

export const Greek_BETA: number;

export const Greek_CHI: number;

export const Greek_DELTA: number;

export const Greek_EPSILON: number;

export const Greek_EPSILONaccent: number;

export const Greek_ETA: number;

export const Greek_ETAaccent: number;

export const Greek_GAMMA: number;

export const Greek_IOTA: number;

export const Greek_IOTAaccent: number;

export const Greek_IOTAdiaeresis: number;

export const Greek_IOTAdieresis: number;

export const Greek_KAPPA: number;

export const Greek_LAMBDA: number;

export const Greek_LAMDA: number;

export const Greek_MU: number;

export const Greek_NU: number;

export const Greek_OMEGA: number;

export const Greek_OMEGAaccent: number;

export const Greek_OMICRON: number;

export const Greek_OMICRONaccent: number;

export const Greek_PHI: number;

export const Greek_PI: number;

export const Greek_PSI: number;

export const Greek_RHO: number;

export const Greek_SIGMA: number;

export const Greek_TAU: number;

export const Greek_THETA: number;

export const Greek_UPSILON: number;

export const Greek_UPSILONaccent: number;

export const Greek_UPSILONdieresis: number;

export const Greek_XI: number;

export const Greek_ZETA: number;

export const Greek_accentdieresis: number;

export const Greek_alpha: number;

export const Greek_alphaaccent: number;

export const Greek_beta: number;

export const Greek_chi: number;

export const Greek_delta: number;

export const Greek_epsilon: number;

export const Greek_epsilonaccent: number;

export const Greek_eta: number;

export const Greek_etaaccent: number;

export const Greek_finalsmallsigma: number;

export const Greek_gamma: number;

export const Greek_horizbar: number;

export const Greek_iota: number;

export const Greek_iotaaccent: number;

export const Greek_iotaaccentdieresis: number;

export const Greek_iotadieresis: number;

export const Greek_kappa: number;

export const Greek_lambda: number;

export const Greek_lamda: number;

export const Greek_mu: number;

export const Greek_nu: number;

export const Greek_omega: number;

export const Greek_omegaaccent: number;

export const Greek_omicron: number;

export const Greek_omicronaccent: number;

export const Greek_phi: number;

export const Greek_pi: number;

export const Greek_psi: number;

export const Greek_rho: number;

export const Greek_sigma: number;

export const Greek_switch: number;

export const Greek_tau: number;

export const Greek_theta: number;

export const Greek_upsilon: number;

export const Greek_upsilonaccent: number;

export const Greek_upsilonaccentdieresis: number;

export const Greek_upsilondieresis: number;

export const Greek_xi: number;

export const Greek_zeta: number;

export const Green: number;

export const H: number;

export const HAS_WAYLAND_COMPOSITOR_SUPPORT: number;

export const Hangul: number;

export const Hangul_A: number;

export const Hangul_AE: number;

export const Hangul_AraeA: number;

export const Hangul_AraeAE: number;

export const Hangul_Banja: number;

export const Hangul_Cieuc: number;

export const Hangul_Codeinput: number;

export const Hangul_Dikeud: number;

export const Hangul_E: number;

export const Hangul_EO: number;

export const Hangul_EU: number;

export const Hangul_End: number;

export const Hangul_Hanja: number;

export const Hangul_Hieuh: number;

export const Hangul_I: number;

export const Hangul_Ieung: number;

export const Hangul_J_Cieuc: number;

export const Hangul_J_Dikeud: number;

export const Hangul_J_Hieuh: number;

export const Hangul_J_Ieung: number;

export const Hangul_J_Jieuj: number;

export const Hangul_J_Khieuq: number;

export const Hangul_J_Kiyeog: number;

export const Hangul_J_KiyeogSios: number;

export const Hangul_J_KkogjiDalrinIeung: number;

export const Hangul_J_Mieum: number;

export const Hangul_J_Nieun: number;

export const Hangul_J_NieunHieuh: number;

export const Hangul_J_NieunJieuj: number;

export const Hangul_J_PanSios: number;

export const Hangul_J_Phieuf: number;

export const Hangul_J_Pieub: number;

export const Hangul_J_PieubSios: number;

export const Hangul_J_Rieul: number;

export const Hangul_J_RieulHieuh: number;

export const Hangul_J_RieulKiyeog: number;

export const Hangul_J_RieulMieum: number;

export const Hangul_J_RieulPhieuf: number;

export const Hangul_J_RieulPieub: number;

export const Hangul_J_RieulSios: number;

export const Hangul_J_RieulTieut: number;

export const Hangul_J_Sios: number;

export const Hangul_J_SsangKiyeog: number;

export const Hangul_J_SsangSios: number;

export const Hangul_J_Tieut: number;

export const Hangul_J_YeorinHieuh: number;

export const Hangul_Jamo: number;

export const Hangul_Jeonja: number;

export const Hangul_Jieuj: number;

export const Hangul_Khieuq: number;

export const Hangul_Kiyeog: number;

export const Hangul_KiyeogSios: number;

export const Hangul_KkogjiDalrinIeung: number;

export const Hangul_Mieum: number;

export const Hangul_MultipleCandidate: number;

export const Hangul_Nieun: number;

export const Hangul_NieunHieuh: number;

export const Hangul_NieunJieuj: number;

export const Hangul_O: number;

export const Hangul_OE: number;

export const Hangul_PanSios: number;

export const Hangul_Phieuf: number;

export const Hangul_Pieub: number;

export const Hangul_PieubSios: number;

export const Hangul_PostHanja: number;

export const Hangul_PreHanja: number;

export const Hangul_PreviousCandidate: number;

export const Hangul_Rieul: number;

export const Hangul_RieulHieuh: number;

export const Hangul_RieulKiyeog: number;

export const Hangul_RieulMieum: number;

export const Hangul_RieulPhieuf: number;

export const Hangul_RieulPieub: number;

export const Hangul_RieulSios: number;

export const Hangul_RieulTieut: number;

export const Hangul_RieulYeorinHieuh: number;

export const Hangul_Romaja: number;

export const Hangul_SingleCandidate: number;

export const Hangul_Sios: number;

export const Hangul_Special: number;

export const Hangul_SsangDikeud: number;

export const Hangul_SsangJieuj: number;

export const Hangul_SsangKiyeog: number;

export const Hangul_SsangPieub: number;

export const Hangul_SsangSios: number;

export const Hangul_Start: number;

export const Hangul_SunkyeongeumMieum: number;

export const Hangul_SunkyeongeumPhieuf: number;

export const Hangul_SunkyeongeumPieub: number;

export const Hangul_Tieut: number;

export const Hangul_U: number;

export const Hangul_WA: number;

export const Hangul_WAE: number;

export const Hangul_WE: number;

export const Hangul_WEO: number;

export const Hangul_WI: number;

export const Hangul_YA: number;

export const Hangul_YAE: number;

export const Hangul_YE: number;

export const Hangul_YEO: number;

export const Hangul_YI: number;

export const Hangul_YO: number;

export const Hangul_YU: number;

export const Hangul_YeorinHieuh: number;

export const Hangul_switch: number;

export const Hankaku: number;

export const Hcircumflex: number;

export const Hebrew_switch: number;

export const Help: number;

export const Henkan: number;

export const Henkan_Mode: number;

export const Hibernate: number;

export const Hiragana: number;

export const Hiragana_Katakana: number;

export const History: number;

export const Home: number;

export const HomePage: number;

export const HotLinks: number;

export const Hstroke: number;

export const Hyper_L: number;

export const Hyper_R: number;

export const I: number;

export const INPUT_EVDEV: string;

export const INPUT_GDK: string;

export const INPUT_NULL: string;

export const INPUT_WAYLAND: string;

export const INPUT_X11: string;

export const ISO_Center_Object: number;

export const ISO_Continuous_Underline: number;

export const ISO_Discontinuous_Underline: number;

export const ISO_Emphasize: number;

export const ISO_Enter: number;

export const ISO_Fast_Cursor_Down: number;

export const ISO_Fast_Cursor_Left: number;

export const ISO_Fast_Cursor_Right: number;

export const ISO_Fast_Cursor_Up: number;

export const ISO_First_Group: number;

export const ISO_First_Group_Lock: number;

export const ISO_Group_Latch: number;

export const ISO_Group_Lock: number;

export const ISO_Group_Shift: number;

export const ISO_Last_Group: number;

export const ISO_Last_Group_Lock: number;

export const ISO_Left_Tab: number;

export const ISO_Level2_Latch: number;

export const ISO_Level3_Latch: number;

export const ISO_Level3_Lock: number;

export const ISO_Level3_Shift: number;

export const ISO_Level5_Latch: number;

export const ISO_Level5_Lock: number;

export const ISO_Level5_Shift: number;

export const ISO_Lock: number;

export const ISO_Move_Line_Down: number;

export const ISO_Move_Line_Up: number;

export const ISO_Next_Group: number;

export const ISO_Next_Group_Lock: number;

export const ISO_Partial_Line_Down: number;

export const ISO_Partial_Line_Up: number;

export const ISO_Partial_Space_Left: number;

export const ISO_Partial_Space_Right: number;

export const ISO_Prev_Group: number;

export const ISO_Prev_Group_Lock: number;

export const ISO_Release_Both_Margins: number;

export const ISO_Release_Margin_Left: number;

export const ISO_Release_Margin_Right: number;

export const ISO_Set_Margin_Left: number;

export const ISO_Set_Margin_Right: number;

export const Iabovedot: number;

export const Iacute: number;

export const Ibelowdot: number;

export const Ibreve: number;

export const Icircumflex: number;

export const Idiaeresis: number;

export const Igrave: number;

export const Ihook: number;

export const Imacron: number;

export const Insert: number;

export const Iogonek: number;

export const Itilde: number;

export const J: number;

export const Jcircumflex: number;

export const K: number;

export const KEY_0: number;

export const KEY_1: number;

export const KEY_2: number;

export const KEY_3: number;

export const KEY_3270_AltCursor: number;

export const KEY_3270_Attn: number;

export const KEY_3270_BackTab: number;

export const KEY_3270_ChangeScreen: number;

export const KEY_3270_Copy: number;

export const KEY_3270_CursorBlink: number;

export const KEY_3270_CursorSelect: number;

export const KEY_3270_DeleteWord: number;

export const KEY_3270_Duplicate: number;

export const KEY_3270_Enter: number;

export const KEY_3270_EraseEOF: number;

export const KEY_3270_EraseInput: number;

export const KEY_3270_ExSelect: number;

export const KEY_3270_FieldMark: number;

export const KEY_3270_Ident: number;

export const KEY_3270_Jump: number;

export const KEY_3270_KeyClick: number;

export const KEY_3270_Left2: number;

export const KEY_3270_PA1: number;

export const KEY_3270_PA2: number;

export const KEY_3270_PA3: number;

export const KEY_3270_Play: number;

export const KEY_3270_PrintScreen: number;

export const KEY_3270_Quit: number;

export const KEY_3270_Record: number;

export const KEY_3270_Reset: number;

export const KEY_3270_Right2: number;

export const KEY_3270_Rule: number;

export const KEY_3270_Setup: number;

export const KEY_3270_Test: number;

export const KEY_4: number;

export const KEY_5: number;

export const KEY_6: number;

export const KEY_7: number;

export const KEY_8: number;

export const KEY_9: number;

export const KEY_A: number;

export const KEY_AE: number;

export const KEY_Aacute: number;

export const KEY_Abelowdot: number;

export const KEY_Abreve: number;

export const KEY_Abreveacute: number;

export const KEY_Abrevebelowdot: number;

export const KEY_Abrevegrave: number;

export const KEY_Abrevehook: number;

export const KEY_Abrevetilde: number;

export const KEY_AccessX_Enable: number;

export const KEY_AccessX_Feedback_Enable: number;

export const KEY_Acircumflex: number;

export const KEY_Acircumflexacute: number;

export const KEY_Acircumflexbelowdot: number;

export const KEY_Acircumflexgrave: number;

export const KEY_Acircumflexhook: number;

export const KEY_Acircumflextilde: number;

export const KEY_AddFavorite: number;

export const KEY_Adiaeresis: number;

export const KEY_Agrave: number;

export const KEY_Ahook: number;

export const KEY_Alt_L: number;

export const KEY_Alt_R: number;

export const KEY_Amacron: number;

export const KEY_Aogonek: number;

export const KEY_ApplicationLeft: number;

export const KEY_ApplicationRight: number;

export const KEY_Arabic_0: number;

export const KEY_Arabic_1: number;

export const KEY_Arabic_2: number;

export const KEY_Arabic_3: number;

export const KEY_Arabic_4: number;

export const KEY_Arabic_5: number;

export const KEY_Arabic_6: number;

export const KEY_Arabic_7: number;

export const KEY_Arabic_8: number;

export const KEY_Arabic_9: number;

export const KEY_Arabic_ain: number;

export const KEY_Arabic_alef: number;

export const KEY_Arabic_alefmaksura: number;

export const KEY_Arabic_beh: number;

export const KEY_Arabic_comma: number;

export const KEY_Arabic_dad: number;

export const KEY_Arabic_dal: number;

export const KEY_Arabic_damma: number;

export const KEY_Arabic_dammatan: number;

export const KEY_Arabic_ddal: number;

export const KEY_Arabic_farsi_yeh: number;

export const KEY_Arabic_fatha: number;

export const KEY_Arabic_fathatan: number;

export const KEY_Arabic_feh: number;

export const KEY_Arabic_fullstop: number;

export const KEY_Arabic_gaf: number;

export const KEY_Arabic_ghain: number;

export const KEY_Arabic_ha: number;

export const KEY_Arabic_hah: number;

export const KEY_Arabic_hamza: number;

export const KEY_Arabic_hamza_above: number;

export const KEY_Arabic_hamza_below: number;

export const KEY_Arabic_hamzaonalef: number;

export const KEY_Arabic_hamzaonwaw: number;

export const KEY_Arabic_hamzaonyeh: number;

export const KEY_Arabic_hamzaunderalef: number;

export const KEY_Arabic_heh: number;

export const KEY_Arabic_heh_doachashmee: number;

export const KEY_Arabic_heh_goal: number;

export const KEY_Arabic_jeem: number;

export const KEY_Arabic_jeh: number;

export const KEY_Arabic_kaf: number;

export const KEY_Arabic_kasra: number;

export const KEY_Arabic_kasratan: number;

export const KEY_Arabic_keheh: number;

export const KEY_Arabic_khah: number;

export const KEY_Arabic_lam: number;

export const KEY_Arabic_madda_above: number;

export const KEY_Arabic_maddaonalef: number;

export const KEY_Arabic_meem: number;

export const KEY_Arabic_noon: number;

export const KEY_Arabic_noon_ghunna: number;

export const KEY_Arabic_peh: number;

export const KEY_Arabic_percent: number;

export const KEY_Arabic_qaf: number;

export const KEY_Arabic_question_mark: number;

export const KEY_Arabic_ra: number;

export const KEY_Arabic_rreh: number;

export const KEY_Arabic_sad: number;

export const KEY_Arabic_seen: number;

export const KEY_Arabic_semicolon: number;

export const KEY_Arabic_shadda: number;

export const KEY_Arabic_sheen: number;

export const KEY_Arabic_sukun: number;

export const KEY_Arabic_superscript_alef: number;

export const KEY_Arabic_switch: number;

export const KEY_Arabic_tah: number;

export const KEY_Arabic_tatweel: number;

export const KEY_Arabic_tcheh: number;

export const KEY_Arabic_teh: number;

export const KEY_Arabic_tehmarbuta: number;

export const KEY_Arabic_thal: number;

export const KEY_Arabic_theh: number;

export const KEY_Arabic_tteh: number;

export const KEY_Arabic_veh: number;

export const KEY_Arabic_waw: number;

export const KEY_Arabic_yeh: number;

export const KEY_Arabic_yeh_baree: number;

export const KEY_Arabic_zah: number;

export const KEY_Arabic_zain: number;

export const KEY_Aring: number;

export const KEY_Armenian_AT: number;

export const KEY_Armenian_AYB: number;

export const KEY_Armenian_BEN: number;

export const KEY_Armenian_CHA: number;

export const KEY_Armenian_DA: number;

export const KEY_Armenian_DZA: number;

export const KEY_Armenian_E: number;

export const KEY_Armenian_FE: number;

export const KEY_Armenian_GHAT: number;

export const KEY_Armenian_GIM: number;

export const KEY_Armenian_HI: number;

export const KEY_Armenian_HO: number;

export const KEY_Armenian_INI: number;

export const KEY_Armenian_JE: number;

export const KEY_Armenian_KE: number;

export const KEY_Armenian_KEN: number;

export const KEY_Armenian_KHE: number;

export const KEY_Armenian_LYUN: number;

export const KEY_Armenian_MEN: number;

export const KEY_Armenian_NU: number;

export const KEY_Armenian_O: number;

export const KEY_Armenian_PE: number;

export const KEY_Armenian_PYUR: number;

export const KEY_Armenian_RA: number;

export const KEY_Armenian_RE: number;

export const KEY_Armenian_SE: number;

export const KEY_Armenian_SHA: number;

export const KEY_Armenian_TCHE: number;

export const KEY_Armenian_TO: number;

export const KEY_Armenian_TSA: number;

export const KEY_Armenian_TSO: number;

export const KEY_Armenian_TYUN: number;

export const KEY_Armenian_VEV: number;

export const KEY_Armenian_VO: number;

export const KEY_Armenian_VYUN: number;

export const KEY_Armenian_YECH: number;

export const KEY_Armenian_ZA: number;

export const KEY_Armenian_ZHE: number;

export const KEY_Armenian_accent: number;

export const KEY_Armenian_amanak: number;

export const KEY_Armenian_apostrophe: number;

export const KEY_Armenian_at: number;

export const KEY_Armenian_ayb: number;

export const KEY_Armenian_ben: number;

export const KEY_Armenian_but: number;

export const KEY_Armenian_cha: number;

export const KEY_Armenian_da: number;

export const KEY_Armenian_dza: number;

export const KEY_Armenian_e: number;

export const KEY_Armenian_exclam: number;

export const KEY_Armenian_fe: number;

export const KEY_Armenian_full_stop: number;

export const KEY_Armenian_ghat: number;

export const KEY_Armenian_gim: number;

export const KEY_Armenian_hi: number;

export const KEY_Armenian_ho: number;

export const KEY_Armenian_hyphen: number;

export const KEY_Armenian_ini: number;

export const KEY_Armenian_je: number;

export const KEY_Armenian_ke: number;

export const KEY_Armenian_ken: number;

export const KEY_Armenian_khe: number;

export const KEY_Armenian_ligature_ew: number;

export const KEY_Armenian_lyun: number;

export const KEY_Armenian_men: number;

export const KEY_Armenian_nu: number;

export const KEY_Armenian_o: number;

export const KEY_Armenian_paruyk: number;

export const KEY_Armenian_pe: number;

export const KEY_Armenian_pyur: number;

export const KEY_Armenian_question: number;

export const KEY_Armenian_ra: number;

export const KEY_Armenian_re: number;

export const KEY_Armenian_se: number;

export const KEY_Armenian_separation_mark: number;

export const KEY_Armenian_sha: number;

export const KEY_Armenian_shesht: number;

export const KEY_Armenian_tche: number;

export const KEY_Armenian_to: number;

export const KEY_Armenian_tsa: number;

export const KEY_Armenian_tso: number;

export const KEY_Armenian_tyun: number;

export const KEY_Armenian_verjaket: number;

export const KEY_Armenian_vev: number;

export const KEY_Armenian_vo: number;

export const KEY_Armenian_vyun: number;

export const KEY_Armenian_yech: number;

export const KEY_Armenian_yentamna: number;

export const KEY_Armenian_za: number;

export const KEY_Armenian_zhe: number;

export const KEY_Atilde: number;

export const KEY_AudibleBell_Enable: number;

export const KEY_AudioCycleTrack: number;

export const KEY_AudioForward: number;

export const KEY_AudioLowerVolume: number;

export const KEY_AudioMedia: number;

export const KEY_AudioMicMute: number;

export const KEY_AudioMute: number;

export const KEY_AudioNext: number;

export const KEY_AudioPause: number;

export const KEY_AudioPlay: number;

export const KEY_AudioPrev: number;

export const KEY_AudioRaiseVolume: number;

export const KEY_AudioRandomPlay: number;

export const KEY_AudioRecord: number;

export const KEY_AudioRepeat: number;

export const KEY_AudioRewind: number;

export const KEY_AudioStop: number;

export const KEY_Away: number;

export const KEY_B: number;

export const KEY_Babovedot: number;

export const KEY_Back: number;

export const KEY_BackForward: number;

export const KEY_BackSpace: number;

export const KEY_Battery: number;

export const KEY_Begin: number;

export const KEY_Blue: number;

export const KEY_Bluetooth: number;

export const KEY_Book: number;

export const KEY_BounceKeys_Enable: number;

export const KEY_Break: number;

export const KEY_BrightnessAdjust: number;

export const KEY_Byelorussian_SHORTU: number;

export const KEY_Byelorussian_shortu: number;

export const KEY_C: number;

export const KEY_CD: number;

export const KEY_CH: number;

export const KEY_C_H: number;

export const KEY_C_h: number;

export const KEY_Cabovedot: number;

export const KEY_Cacute: number;

export const KEY_Calculator: number;

export const KEY_Calendar: number;

export const KEY_Cancel: number;

export const KEY_Caps_Lock: number;

export const KEY_Ccaron: number;

export const KEY_Ccedilla: number;

export const KEY_Ccircumflex: number;

export const KEY_Ch: number;

export const KEY_Clear: number;

export const KEY_ClearGrab: number;

export const KEY_Close: number;

export const KEY_Codeinput: number;

export const KEY_ColonSign: number;

export const KEY_Community: number;

export const KEY_ContrastAdjust: number;

export const KEY_Control_L: number;

export const KEY_Control_R: number;

export const KEY_Copy: number;

export const KEY_CruzeiroSign: number;

export const KEY_Cut: number;

export const KEY_CycleAngle: number;

export const KEY_Cyrillic_A: number;

export const KEY_Cyrillic_BE: number;

export const KEY_Cyrillic_CHE: number;

export const KEY_Cyrillic_CHE_descender: number;

export const KEY_Cyrillic_CHE_vertstroke: number;

export const KEY_Cyrillic_DE: number;

export const KEY_Cyrillic_DZHE: number;

export const KEY_Cyrillic_E: number;

export const KEY_Cyrillic_EF: number;

export const KEY_Cyrillic_EL: number;

export const KEY_Cyrillic_EM: number;

export const KEY_Cyrillic_EN: number;

export const KEY_Cyrillic_EN_descender: number;

export const KEY_Cyrillic_ER: number;

export const KEY_Cyrillic_ES: number;

export const KEY_Cyrillic_GHE: number;

export const KEY_Cyrillic_GHE_bar: number;

export const KEY_Cyrillic_HA: number;

export const KEY_Cyrillic_HARDSIGN: number;

export const KEY_Cyrillic_HA_descender: number;

export const KEY_Cyrillic_I: number;

export const KEY_Cyrillic_IE: number;

export const KEY_Cyrillic_IO: number;

export const KEY_Cyrillic_I_macron: number;

export const KEY_Cyrillic_JE: number;

export const KEY_Cyrillic_KA: number;

export const KEY_Cyrillic_KA_descender: number;

export const KEY_Cyrillic_KA_vertstroke: number;

export const KEY_Cyrillic_LJE: number;

export const KEY_Cyrillic_NJE: number;

export const KEY_Cyrillic_O: number;

export const KEY_Cyrillic_O_bar: number;

export const KEY_Cyrillic_PE: number;

export const KEY_Cyrillic_SCHWA: number;

export const KEY_Cyrillic_SHA: number;

export const KEY_Cyrillic_SHCHA: number;

export const KEY_Cyrillic_SHHA: number;

export const KEY_Cyrillic_SHORTI: number;

export const KEY_Cyrillic_SOFTSIGN: number;

export const KEY_Cyrillic_TE: number;

export const KEY_Cyrillic_TSE: number;

export const KEY_Cyrillic_U: number;

export const KEY_Cyrillic_U_macron: number;

export const KEY_Cyrillic_U_straight: number;

export const KEY_Cyrillic_U_straight_bar: number;

export const KEY_Cyrillic_VE: number;

export const KEY_Cyrillic_YA: number;

export const KEY_Cyrillic_YERU: number;

export const KEY_Cyrillic_YU: number;

export const KEY_Cyrillic_ZE: number;

export const KEY_Cyrillic_ZHE: number;

export const KEY_Cyrillic_ZHE_descender: number;

export const KEY_Cyrillic_a: number;

export const KEY_Cyrillic_be: number;

export const KEY_Cyrillic_che: number;

export const KEY_Cyrillic_che_descender: number;

export const KEY_Cyrillic_che_vertstroke: number;

export const KEY_Cyrillic_de: number;

export const KEY_Cyrillic_dzhe: number;

export const KEY_Cyrillic_e: number;

export const KEY_Cyrillic_ef: number;

export const KEY_Cyrillic_el: number;

export const KEY_Cyrillic_em: number;

export const KEY_Cyrillic_en: number;

export const KEY_Cyrillic_en_descender: number;

export const KEY_Cyrillic_er: number;

export const KEY_Cyrillic_es: number;

export const KEY_Cyrillic_ghe: number;

export const KEY_Cyrillic_ghe_bar: number;

export const KEY_Cyrillic_ha: number;

export const KEY_Cyrillic_ha_descender: number;

export const KEY_Cyrillic_hardsign: number;

export const KEY_Cyrillic_i: number;

export const KEY_Cyrillic_i_macron: number;

export const KEY_Cyrillic_ie: number;

export const KEY_Cyrillic_io: number;

export const KEY_Cyrillic_je: number;

export const KEY_Cyrillic_ka: number;

export const KEY_Cyrillic_ka_descender: number;

export const KEY_Cyrillic_ka_vertstroke: number;

export const KEY_Cyrillic_lje: number;

export const KEY_Cyrillic_nje: number;

export const KEY_Cyrillic_o: number;

export const KEY_Cyrillic_o_bar: number;

export const KEY_Cyrillic_pe: number;

export const KEY_Cyrillic_schwa: number;

export const KEY_Cyrillic_sha: number;

export const KEY_Cyrillic_shcha: number;

export const KEY_Cyrillic_shha: number;

export const KEY_Cyrillic_shorti: number;

export const KEY_Cyrillic_softsign: number;

export const KEY_Cyrillic_te: number;

export const KEY_Cyrillic_tse: number;

export const KEY_Cyrillic_u: number;

export const KEY_Cyrillic_u_macron: number;

export const KEY_Cyrillic_u_straight: number;

export const KEY_Cyrillic_u_straight_bar: number;

export const KEY_Cyrillic_ve: number;

export const KEY_Cyrillic_ya: number;

export const KEY_Cyrillic_yeru: number;

export const KEY_Cyrillic_yu: number;

export const KEY_Cyrillic_ze: number;

export const KEY_Cyrillic_zhe: number;

export const KEY_Cyrillic_zhe_descender: number;

export const KEY_D: number;

export const KEY_DOS: number;

export const KEY_Dabovedot: number;

export const KEY_Dcaron: number;

export const KEY_Delete: number;

export const KEY_Display: number;

export const KEY_Documents: number;

export const KEY_DongSign: number;

export const KEY_Down: number;

export const KEY_Dstroke: number;

export const KEY_E: number;

export const KEY_ENG: number;

export const KEY_ETH: number;

export const KEY_EZH: number;

export const KEY_Eabovedot: number;

export const KEY_Eacute: number;

export const KEY_Ebelowdot: number;

export const KEY_Ecaron: number;

export const KEY_Ecircumflex: number;

export const KEY_Ecircumflexacute: number;

export const KEY_Ecircumflexbelowdot: number;

export const KEY_Ecircumflexgrave: number;

export const KEY_Ecircumflexhook: number;

export const KEY_Ecircumflextilde: number;

export const KEY_EcuSign: number;

export const KEY_Ediaeresis: number;

export const KEY_Egrave: number;

export const KEY_Ehook: number;

export const KEY_Eisu_Shift: number;

export const KEY_Eisu_toggle: number;

export const KEY_Eject: number;

export const KEY_Emacron: number;

export const KEY_End: number;

export const KEY_Eogonek: number;

export const KEY_Escape: number;

export const KEY_Eth: number;

export const KEY_Etilde: number;

export const KEY_EuroSign: number;

export const KEY_Excel: number;

export const KEY_Execute: number;

export const KEY_Explorer: number;

export const KEY_F: number;

export const KEY_F1: number;

export const KEY_F10: number;

export const KEY_F11: number;

export const KEY_F12: number;

export const KEY_F13: number;

export const KEY_F14: number;

export const KEY_F15: number;

export const KEY_F16: number;

export const KEY_F17: number;

export const KEY_F18: number;

export const KEY_F19: number;

export const KEY_F2: number;

export const KEY_F20: number;

export const KEY_F21: number;

export const KEY_F22: number;

export const KEY_F23: number;

export const KEY_F24: number;

export const KEY_F25: number;

export const KEY_F26: number;

export const KEY_F27: number;

export const KEY_F28: number;

export const KEY_F29: number;

export const KEY_F3: number;

export const KEY_F30: number;

export const KEY_F31: number;

export const KEY_F32: number;

export const KEY_F33: number;

export const KEY_F34: number;

export const KEY_F35: number;

export const KEY_F4: number;

export const KEY_F5: number;

export const KEY_F6: number;

export const KEY_F7: number;

export const KEY_F8: number;

export const KEY_F9: number;

export const KEY_FFrancSign: number;

export const KEY_Fabovedot: number;

export const KEY_Farsi_0: number;

export const KEY_Farsi_1: number;

export const KEY_Farsi_2: number;

export const KEY_Farsi_3: number;

export const KEY_Farsi_4: number;

export const KEY_Farsi_5: number;

export const KEY_Farsi_6: number;

export const KEY_Farsi_7: number;

export const KEY_Farsi_8: number;

export const KEY_Farsi_9: number;

export const KEY_Farsi_yeh: number;

export const KEY_Favorites: number;

export const KEY_Finance: number;

export const KEY_Find: number;

export const KEY_First_Virtual_Screen: number;

export const KEY_Forward: number;

export const KEY_FrameBack: number;

export const KEY_FrameForward: number;

export const KEY_G: number;

export const KEY_Gabovedot: number;

export const KEY_Game: number;

export const KEY_Gbreve: number;

export const KEY_Gcaron: number;

export const KEY_Gcedilla: number;

export const KEY_Gcircumflex: number;

export const KEY_Georgian_an: number;

export const KEY_Georgian_ban: number;

export const KEY_Georgian_can: number;

export const KEY_Georgian_char: number;

export const KEY_Georgian_chin: number;

export const KEY_Georgian_cil: number;

export const KEY_Georgian_don: number;

export const KEY_Georgian_en: number;

export const KEY_Georgian_fi: number;

export const KEY_Georgian_gan: number;

export const KEY_Georgian_ghan: number;

export const KEY_Georgian_hae: number;

export const KEY_Georgian_har: number;

export const KEY_Georgian_he: number;

export const KEY_Georgian_hie: number;

export const KEY_Georgian_hoe: number;

export const KEY_Georgian_in: number;

export const KEY_Georgian_jhan: number;

export const KEY_Georgian_jil: number;

export const KEY_Georgian_kan: number;

export const KEY_Georgian_khar: number;

export const KEY_Georgian_las: number;

export const KEY_Georgian_man: number;

export const KEY_Georgian_nar: number;

export const KEY_Georgian_on: number;

export const KEY_Georgian_par: number;

export const KEY_Georgian_phar: number;

export const KEY_Georgian_qar: number;

export const KEY_Georgian_rae: number;

export const KEY_Georgian_san: number;

export const KEY_Georgian_shin: number;

export const KEY_Georgian_tan: number;

export const KEY_Georgian_tar: number;

export const KEY_Georgian_un: number;

export const KEY_Georgian_vin: number;

export const KEY_Georgian_we: number;

export const KEY_Georgian_xan: number;

export const KEY_Georgian_zen: number;

export const KEY_Georgian_zhar: number;

export const KEY_Go: number;

export const KEY_Greek_ALPHA: number;

export const KEY_Greek_ALPHAaccent: number;

export const KEY_Greek_BETA: number;

export const KEY_Greek_CHI: number;

export const KEY_Greek_DELTA: number;

export const KEY_Greek_EPSILON: number;

export const KEY_Greek_EPSILONaccent: number;

export const KEY_Greek_ETA: number;

export const KEY_Greek_ETAaccent: number;

export const KEY_Greek_GAMMA: number;

export const KEY_Greek_IOTA: number;

export const KEY_Greek_IOTAaccent: number;

export const KEY_Greek_IOTAdiaeresis: number;

export const KEY_Greek_IOTAdieresis: number;

export const KEY_Greek_KAPPA: number;

export const KEY_Greek_LAMBDA: number;

export const KEY_Greek_LAMDA: number;

export const KEY_Greek_MU: number;

export const KEY_Greek_NU: number;

export const KEY_Greek_OMEGA: number;

export const KEY_Greek_OMEGAaccent: number;

export const KEY_Greek_OMICRON: number;

export const KEY_Greek_OMICRONaccent: number;

export const KEY_Greek_PHI: number;

export const KEY_Greek_PI: number;

export const KEY_Greek_PSI: number;

export const KEY_Greek_RHO: number;

export const KEY_Greek_SIGMA: number;

export const KEY_Greek_TAU: number;

export const KEY_Greek_THETA: number;

export const KEY_Greek_UPSILON: number;

export const KEY_Greek_UPSILONaccent: number;

export const KEY_Greek_UPSILONdieresis: number;

export const KEY_Greek_XI: number;

export const KEY_Greek_ZETA: number;

export const KEY_Greek_accentdieresis: number;

export const KEY_Greek_alpha: number;

export const KEY_Greek_alphaaccent: number;

export const KEY_Greek_beta: number;

export const KEY_Greek_chi: number;

export const KEY_Greek_delta: number;

export const KEY_Greek_epsilon: number;

export const KEY_Greek_epsilonaccent: number;

export const KEY_Greek_eta: number;

export const KEY_Greek_etaaccent: number;

export const KEY_Greek_finalsmallsigma: number;

export const KEY_Greek_gamma: number;

export const KEY_Greek_horizbar: number;

export const KEY_Greek_iota: number;

export const KEY_Greek_iotaaccent: number;

export const KEY_Greek_iotaaccentdieresis: number;

export const KEY_Greek_iotadieresis: number;

export const KEY_Greek_kappa: number;

export const KEY_Greek_lambda: number;

export const KEY_Greek_lamda: number;

export const KEY_Greek_mu: number;

export const KEY_Greek_nu: number;

export const KEY_Greek_omega: number;

export const KEY_Greek_omegaaccent: number;

export const KEY_Greek_omicron: number;

export const KEY_Greek_omicronaccent: number;

export const KEY_Greek_phi: number;

export const KEY_Greek_pi: number;

export const KEY_Greek_psi: number;

export const KEY_Greek_rho: number;

export const KEY_Greek_sigma: number;

export const KEY_Greek_switch: number;

export const KEY_Greek_tau: number;

export const KEY_Greek_theta: number;

export const KEY_Greek_upsilon: number;

export const KEY_Greek_upsilonaccent: number;

export const KEY_Greek_upsilonaccentdieresis: number;

export const KEY_Greek_upsilondieresis: number;

export const KEY_Greek_xi: number;

export const KEY_Greek_zeta: number;

export const KEY_Green: number;

export const KEY_H: number;

export const KEY_Hangul: number;

export const KEY_Hangul_A: number;

export const KEY_Hangul_AE: number;

export const KEY_Hangul_AraeA: number;

export const KEY_Hangul_AraeAE: number;

export const KEY_Hangul_Banja: number;

export const KEY_Hangul_Cieuc: number;

export const KEY_Hangul_Codeinput: number;

export const KEY_Hangul_Dikeud: number;

export const KEY_Hangul_E: number;

export const KEY_Hangul_EO: number;

export const KEY_Hangul_EU: number;

export const KEY_Hangul_End: number;

export const KEY_Hangul_Hanja: number;

export const KEY_Hangul_Hieuh: number;

export const KEY_Hangul_I: number;

export const KEY_Hangul_Ieung: number;

export const KEY_Hangul_J_Cieuc: number;

export const KEY_Hangul_J_Dikeud: number;

export const KEY_Hangul_J_Hieuh: number;

export const KEY_Hangul_J_Ieung: number;

export const KEY_Hangul_J_Jieuj: number;

export const KEY_Hangul_J_Khieuq: number;

export const KEY_Hangul_J_Kiyeog: number;

export const KEY_Hangul_J_KiyeogSios: number;

export const KEY_Hangul_J_KkogjiDalrinIeung: number;

export const KEY_Hangul_J_Mieum: number;

export const KEY_Hangul_J_Nieun: number;

export const KEY_Hangul_J_NieunHieuh: number;

export const KEY_Hangul_J_NieunJieuj: number;

export const KEY_Hangul_J_PanSios: number;

export const KEY_Hangul_J_Phieuf: number;

export const KEY_Hangul_J_Pieub: number;

export const KEY_Hangul_J_PieubSios: number;

export const KEY_Hangul_J_Rieul: number;

export const KEY_Hangul_J_RieulHieuh: number;

export const KEY_Hangul_J_RieulKiyeog: number;

export const KEY_Hangul_J_RieulMieum: number;

export const KEY_Hangul_J_RieulPhieuf: number;

export const KEY_Hangul_J_RieulPieub: number;

export const KEY_Hangul_J_RieulSios: number;

export const KEY_Hangul_J_RieulTieut: number;

export const KEY_Hangul_J_Sios: number;

export const KEY_Hangul_J_SsangKiyeog: number;

export const KEY_Hangul_J_SsangSios: number;

export const KEY_Hangul_J_Tieut: number;

export const KEY_Hangul_J_YeorinHieuh: number;

export const KEY_Hangul_Jamo: number;

export const KEY_Hangul_Jeonja: number;

export const KEY_Hangul_Jieuj: number;

export const KEY_Hangul_Khieuq: number;

export const KEY_Hangul_Kiyeog: number;

export const KEY_Hangul_KiyeogSios: number;

export const KEY_Hangul_KkogjiDalrinIeung: number;

export const KEY_Hangul_Mieum: number;

export const KEY_Hangul_MultipleCandidate: number;

export const KEY_Hangul_Nieun: number;

export const KEY_Hangul_NieunHieuh: number;

export const KEY_Hangul_NieunJieuj: number;

export const KEY_Hangul_O: number;

export const KEY_Hangul_OE: number;

export const KEY_Hangul_PanSios: number;

export const KEY_Hangul_Phieuf: number;

export const KEY_Hangul_Pieub: number;

export const KEY_Hangul_PieubSios: number;

export const KEY_Hangul_PostHanja: number;

export const KEY_Hangul_PreHanja: number;

export const KEY_Hangul_PreviousCandidate: number;

export const KEY_Hangul_Rieul: number;

export const KEY_Hangul_RieulHieuh: number;

export const KEY_Hangul_RieulKiyeog: number;

export const KEY_Hangul_RieulMieum: number;

export const KEY_Hangul_RieulPhieuf: number;

export const KEY_Hangul_RieulPieub: number;

export const KEY_Hangul_RieulSios: number;

export const KEY_Hangul_RieulTieut: number;

export const KEY_Hangul_RieulYeorinHieuh: number;

export const KEY_Hangul_Romaja: number;

export const KEY_Hangul_SingleCandidate: number;

export const KEY_Hangul_Sios: number;

export const KEY_Hangul_Special: number;

export const KEY_Hangul_SsangDikeud: number;

export const KEY_Hangul_SsangJieuj: number;

export const KEY_Hangul_SsangKiyeog: number;

export const KEY_Hangul_SsangPieub: number;

export const KEY_Hangul_SsangSios: number;

export const KEY_Hangul_Start: number;

export const KEY_Hangul_SunkyeongeumMieum: number;

export const KEY_Hangul_SunkyeongeumPhieuf: number;

export const KEY_Hangul_SunkyeongeumPieub: number;

export const KEY_Hangul_Tieut: number;

export const KEY_Hangul_U: number;

export const KEY_Hangul_WA: number;

export const KEY_Hangul_WAE: number;

export const KEY_Hangul_WE: number;

export const KEY_Hangul_WEO: number;

export const KEY_Hangul_WI: number;

export const KEY_Hangul_YA: number;

export const KEY_Hangul_YAE: number;

export const KEY_Hangul_YE: number;

export const KEY_Hangul_YEO: number;

export const KEY_Hangul_YI: number;

export const KEY_Hangul_YO: number;

export const KEY_Hangul_YU: number;

export const KEY_Hangul_YeorinHieuh: number;

export const KEY_Hangul_switch: number;

export const KEY_Hankaku: number;

export const KEY_Hcircumflex: number;

export const KEY_Hebrew_switch: number;

export const KEY_Help: number;

export const KEY_Henkan: number;

export const KEY_Henkan_Mode: number;

export const KEY_Hibernate: number;

export const KEY_Hiragana: number;

export const KEY_Hiragana_Katakana: number;

export const KEY_History: number;

export const KEY_Home: number;

export const KEY_HomePage: number;

export const KEY_HotLinks: number;

export const KEY_Hstroke: number;

export const KEY_Hyper_L: number;

export const KEY_Hyper_R: number;

export const KEY_I: number;

export const KEY_ISO_Center_Object: number;

export const KEY_ISO_Continuous_Underline: number;

export const KEY_ISO_Discontinuous_Underline: number;

export const KEY_ISO_Emphasize: number;

export const KEY_ISO_Enter: number;

export const KEY_ISO_Fast_Cursor_Down: number;

export const KEY_ISO_Fast_Cursor_Left: number;

export const KEY_ISO_Fast_Cursor_Right: number;

export const KEY_ISO_Fast_Cursor_Up: number;

export const KEY_ISO_First_Group: number;

export const KEY_ISO_First_Group_Lock: number;

export const KEY_ISO_Group_Latch: number;

export const KEY_ISO_Group_Lock: number;

export const KEY_ISO_Group_Shift: number;

export const KEY_ISO_Last_Group: number;

export const KEY_ISO_Last_Group_Lock: number;

export const KEY_ISO_Left_Tab: number;

export const KEY_ISO_Level2_Latch: number;

export const KEY_ISO_Level3_Latch: number;

export const KEY_ISO_Level3_Lock: number;

export const KEY_ISO_Level3_Shift: number;

export const KEY_ISO_Level5_Latch: number;

export const KEY_ISO_Level5_Lock: number;

export const KEY_ISO_Level5_Shift: number;

export const KEY_ISO_Lock: number;

export const KEY_ISO_Move_Line_Down: number;

export const KEY_ISO_Move_Line_Up: number;

export const KEY_ISO_Next_Group: number;

export const KEY_ISO_Next_Group_Lock: number;

export const KEY_ISO_Partial_Line_Down: number;

export const KEY_ISO_Partial_Line_Up: number;

export const KEY_ISO_Partial_Space_Left: number;

export const KEY_ISO_Partial_Space_Right: number;

export const KEY_ISO_Prev_Group: number;

export const KEY_ISO_Prev_Group_Lock: number;

export const KEY_ISO_Release_Both_Margins: number;

export const KEY_ISO_Release_Margin_Left: number;

export const KEY_ISO_Release_Margin_Right: number;

export const KEY_ISO_Set_Margin_Left: number;

export const KEY_ISO_Set_Margin_Right: number;

export const KEY_Iabovedot: number;

export const KEY_Iacute: number;

export const KEY_Ibelowdot: number;

export const KEY_Ibreve: number;

export const KEY_Icircumflex: number;

export const KEY_Idiaeresis: number;

export const KEY_Igrave: number;

export const KEY_Ihook: number;

export const KEY_Imacron: number;

export const KEY_Insert: number;

export const KEY_Iogonek: number;

export const KEY_Itilde: number;

export const KEY_J: number;

export const KEY_Jcircumflex: number;

export const KEY_K: number;

export const KEY_KP_0: number;

export const KEY_KP_1: number;

export const KEY_KP_2: number;

export const KEY_KP_3: number;

export const KEY_KP_4: number;

export const KEY_KP_5: number;

export const KEY_KP_6: number;

export const KEY_KP_7: number;

export const KEY_KP_8: number;

export const KEY_KP_9: number;

export const KEY_KP_Add: number;

export const KEY_KP_Begin: number;

export const KEY_KP_Decimal: number;

export const KEY_KP_Delete: number;

export const KEY_KP_Divide: number;

export const KEY_KP_Down: number;

export const KEY_KP_End: number;

export const KEY_KP_Enter: number;

export const KEY_KP_Equal: number;

export const KEY_KP_F1: number;

export const KEY_KP_F2: number;

export const KEY_KP_F3: number;

export const KEY_KP_F4: number;

export const KEY_KP_Home: number;

export const KEY_KP_Insert: number;

export const KEY_KP_Left: number;

export const KEY_KP_Multiply: number;

export const KEY_KP_Next: number;

export const KEY_KP_Page_Down: number;

export const KEY_KP_Page_Up: number;

export const KEY_KP_Prior: number;

export const KEY_KP_Right: number;

export const KEY_KP_Separator: number;

export const KEY_KP_Space: number;

export const KEY_KP_Subtract: number;

export const KEY_KP_Tab: number;

export const KEY_KP_Up: number;

export const KEY_Kana_Lock: number;

export const KEY_Kana_Shift: number;

export const KEY_Kanji: number;

export const KEY_Kanji_Bangou: number;

export const KEY_Katakana: number;

export const KEY_KbdBrightnessDown: number;

export const KEY_KbdBrightnessUp: number;

export const KEY_KbdLightOnOff: number;

export const KEY_Kcedilla: number;

export const KEY_Korean_Won: number;

export const KEY_L: number;

export const KEY_L1: number;

export const KEY_L10: number;

export const KEY_L2: number;

export const KEY_L3: number;

export const KEY_L4: number;

export const KEY_L5: number;

export const KEY_L6: number;

export const KEY_L7: number;

export const KEY_L8: number;

export const KEY_L9: number;

export const KEY_Lacute: number;

export const KEY_Last_Virtual_Screen: number;

export const KEY_Launch0: number;

export const KEY_Launch1: number;

export const KEY_Launch2: number;

export const KEY_Launch3: number;

export const KEY_Launch4: number;

export const KEY_Launch5: number;

export const KEY_Launch6: number;

export const KEY_Launch7: number;

export const KEY_Launch8: number;

export const KEY_Launch9: number;

export const KEY_LaunchA: number;

export const KEY_LaunchB: number;

export const KEY_LaunchC: number;

export const KEY_LaunchD: number;

export const KEY_LaunchE: number;

export const KEY_LaunchF: number;

export const KEY_Lbelowdot: number;

export const KEY_Lcaron: number;

export const KEY_Lcedilla: number;

export const KEY_Left: number;

export const KEY_LightBulb: number;

export const KEY_Linefeed: number;

export const KEY_LiraSign: number;

export const KEY_LogGrabInfo: number;

export const KEY_LogOff: number;

export const KEY_LogWindowTree: number;

export const KEY_Lstroke: number;

export const KEY_M: number;

export const KEY_Mabovedot: number;

export const KEY_Macedonia_DSE: number;

export const KEY_Macedonia_GJE: number;

export const KEY_Macedonia_KJE: number;

export const KEY_Macedonia_dse: number;

export const KEY_Macedonia_gje: number;

export const KEY_Macedonia_kje: number;

export const KEY_Mae_Koho: number;

export const KEY_Mail: number;

export const KEY_MailForward: number;

export const KEY_Market: number;

export const KEY_Massyo: number;

export const KEY_Meeting: number;

export const KEY_Memo: number;

export const KEY_Menu: number;

export const KEY_MenuKB: number;

export const KEY_MenuPB: number;

export const KEY_Messenger: number;

export const KEY_Meta_L: number;

export const KEY_Meta_R: number;

export const KEY_MillSign: number;

export const KEY_ModeLock: number;

export const KEY_Mode_switch: number;

export const KEY_MonBrightnessDown: number;

export const KEY_MonBrightnessUp: number;

export const KEY_MouseKeys_Accel_Enable: number;

export const KEY_MouseKeys_Enable: number;

export const KEY_Muhenkan: number;

export const KEY_Multi_key: number;

export const KEY_MultipleCandidate: number;

export const KEY_Music: number;

export const KEY_MyComputer: number;

export const KEY_MySites: number;

export const KEY_N: number;

export const KEY_Nacute: number;

export const KEY_NairaSign: number;

export const KEY_Ncaron: number;

export const KEY_Ncedilla: number;

export const KEY_New: number;

export const KEY_NewSheqelSign: number;

export const KEY_News: number;

export const KEY_Next: number;

export const KEY_Next_VMode: number;

export const KEY_Next_Virtual_Screen: number;

export const KEY_Ntilde: number;

export const KEY_Num_Lock: number;

export const KEY_O: number;

export const KEY_OE: number;

export const KEY_Oacute: number;

export const KEY_Obarred: number;

export const KEY_Obelowdot: number;

export const KEY_Ocaron: number;

export const KEY_Ocircumflex: number;

export const KEY_Ocircumflexacute: number;

export const KEY_Ocircumflexbelowdot: number;

export const KEY_Ocircumflexgrave: number;

export const KEY_Ocircumflexhook: number;

export const KEY_Ocircumflextilde: number;

export const KEY_Odiaeresis: number;

export const KEY_Odoubleacute: number;

export const KEY_OfficeHome: number;

export const KEY_Ograve: number;

export const KEY_Ohook: number;

export const KEY_Ohorn: number;

export const KEY_Ohornacute: number;

export const KEY_Ohornbelowdot: number;

export const KEY_Ohorngrave: number;

export const KEY_Ohornhook: number;

export const KEY_Ohorntilde: number;

export const KEY_Omacron: number;

export const KEY_Ooblique: number;

export const KEY_Open: number;

export const KEY_OpenURL: number;

export const KEY_Option: number;

export const KEY_Oslash: number;

export const KEY_Otilde: number;

export const KEY_Overlay1_Enable: number;

export const KEY_Overlay2_Enable: number;

export const KEY_P: number;

export const KEY_Pabovedot: number;

export const KEY_Page_Down: number;

export const KEY_Page_Up: number;

export const KEY_Paste: number;

export const KEY_Pause: number;

export const KEY_PesetaSign: number;

export const KEY_Phone: number;

export const KEY_Pictures: number;

export const KEY_Pointer_Accelerate: number;

export const KEY_Pointer_Button1: number;

export const KEY_Pointer_Button2: number;

export const KEY_Pointer_Button3: number;

export const KEY_Pointer_Button4: number;

export const KEY_Pointer_Button5: number;

export const KEY_Pointer_Button_Dflt: number;

export const KEY_Pointer_DblClick1: number;

export const KEY_Pointer_DblClick2: number;

export const KEY_Pointer_DblClick3: number;

export const KEY_Pointer_DblClick4: number;

export const KEY_Pointer_DblClick5: number;

export const KEY_Pointer_DblClick_Dflt: number;

export const KEY_Pointer_DfltBtnNext: number;

export const KEY_Pointer_DfltBtnPrev: number;

export const KEY_Pointer_Down: number;

export const KEY_Pointer_DownLeft: number;

export const KEY_Pointer_DownRight: number;

export const KEY_Pointer_Drag1: number;

export const KEY_Pointer_Drag2: number;

export const KEY_Pointer_Drag3: number;

export const KEY_Pointer_Drag4: number;

export const KEY_Pointer_Drag5: number;

export const KEY_Pointer_Drag_Dflt: number;

export const KEY_Pointer_EnableKeys: number;

export const KEY_Pointer_Left: number;

export const KEY_Pointer_Right: number;

export const KEY_Pointer_Up: number;

export const KEY_Pointer_UpLeft: number;

export const KEY_Pointer_UpRight: number;

export const KEY_PowerDown: number;

export const KEY_PowerOff: number;

export const KEY_Prev_VMode: number;

export const KEY_Prev_Virtual_Screen: number;

export const KEY_PreviousCandidate: number;

export const KEY_Print: number;

export const KEY_Prior: number;

export const KEY_Q: number;

export const KEY_R: number;

export const KEY_R1: number;

export const KEY_R10: number;

export const KEY_R11: number;

export const KEY_R12: number;

export const KEY_R13: number;

export const KEY_R14: number;

export const KEY_R15: number;

export const KEY_R2: number;

export const KEY_R3: number;

export const KEY_R4: number;

export const KEY_R5: number;

export const KEY_R6: number;

export const KEY_R7: number;

export const KEY_R8: number;

export const KEY_R9: number;

export const KEY_Racute: number;

export const KEY_Rcaron: number;

export const KEY_Rcedilla: number;

export const KEY_Red: number;

export const KEY_Redo: number;

export const KEY_Refresh: number;

export const KEY_Reload: number;

export const KEY_RepeatKeys_Enable: number;

export const KEY_Reply: number;

export const KEY_Return: number;

export const KEY_Right: number;

export const KEY_RockerDown: number;

export const KEY_RockerEnter: number;

export const KEY_RockerUp: number;

export const KEY_Romaji: number;

export const KEY_RotateWindows: number;

export const KEY_RotationKB: number;

export const KEY_RotationPB: number;

export const KEY_RupeeSign: number;

export const KEY_S: number;

export const KEY_SCHWA: number;

export const KEY_Sabovedot: number;

export const KEY_Sacute: number;

export const KEY_Save: number;

export const KEY_Scaron: number;

export const KEY_Scedilla: number;

export const KEY_Scircumflex: number;

export const KEY_ScreenSaver: number;

export const KEY_ScrollClick: number;

export const KEY_ScrollDown: number;

export const KEY_ScrollUp: number;

export const KEY_Scroll_Lock: number;

export const KEY_Search: number;

export const KEY_Select: number;

export const KEY_SelectButton: number;

export const KEY_Send: number;

export const KEY_Serbian_DJE: number;

export const KEY_Serbian_DZE: number;

export const KEY_Serbian_JE: number;

export const KEY_Serbian_LJE: number;

export const KEY_Serbian_NJE: number;

export const KEY_Serbian_TSHE: number;

export const KEY_Serbian_dje: number;

export const KEY_Serbian_dze: number;

export const KEY_Serbian_je: number;

export const KEY_Serbian_lje: number;

export const KEY_Serbian_nje: number;

export const KEY_Serbian_tshe: number;

export const KEY_Shift_L: number;

export const KEY_Shift_Lock: number;

export const KEY_Shift_R: number;

export const KEY_Shop: number;

export const KEY_SingleCandidate: number;

export const KEY_Sinh_a: number;

export const KEY_Sinh_aa: number;

export const KEY_Sinh_aa2: number;

export const KEY_Sinh_ae: number;

export const KEY_Sinh_ae2: number;

export const KEY_Sinh_aee: number;

export const KEY_Sinh_aee2: number;

export const KEY_Sinh_ai: number;

export const KEY_Sinh_ai2: number;

export const KEY_Sinh_al: number;

export const KEY_Sinh_au: number;

export const KEY_Sinh_au2: number;

export const KEY_Sinh_ba: number;

export const KEY_Sinh_bha: number;

export const KEY_Sinh_ca: number;

export const KEY_Sinh_cha: number;

export const KEY_Sinh_dda: number;

export const KEY_Sinh_ddha: number;

export const KEY_Sinh_dha: number;

export const KEY_Sinh_dhha: number;

export const KEY_Sinh_e: number;

export const KEY_Sinh_e2: number;

export const KEY_Sinh_ee: number;

export const KEY_Sinh_ee2: number;

export const KEY_Sinh_fa: number;

export const KEY_Sinh_ga: number;

export const KEY_Sinh_gha: number;

export const KEY_Sinh_h2: number;

export const KEY_Sinh_ha: number;

export const KEY_Sinh_i: number;

export const KEY_Sinh_i2: number;

export const KEY_Sinh_ii: number;

export const KEY_Sinh_ii2: number;

export const KEY_Sinh_ja: number;

export const KEY_Sinh_jha: number;

export const KEY_Sinh_jnya: number;

export const KEY_Sinh_ka: number;

export const KEY_Sinh_kha: number;

export const KEY_Sinh_kunddaliya: number;

export const KEY_Sinh_la: number;

export const KEY_Sinh_lla: number;

export const KEY_Sinh_lu: number;

export const KEY_Sinh_lu2: number;

export const KEY_Sinh_luu: number;

export const KEY_Sinh_luu2: number;

export const KEY_Sinh_ma: number;

export const KEY_Sinh_mba: number;

export const KEY_Sinh_na: number;

export const KEY_Sinh_ndda: number;

export const KEY_Sinh_ndha: number;

export const KEY_Sinh_ng: number;

export const KEY_Sinh_ng2: number;

export const KEY_Sinh_nga: number;

export const KEY_Sinh_nja: number;

export const KEY_Sinh_nna: number;

export const KEY_Sinh_nya: number;

export const KEY_Sinh_o: number;

export const KEY_Sinh_o2: number;

export const KEY_Sinh_oo: number;

export const KEY_Sinh_oo2: number;

export const KEY_Sinh_pa: number;

export const KEY_Sinh_pha: number;

export const KEY_Sinh_ra: number;

export const KEY_Sinh_ri: number;

export const KEY_Sinh_rii: number;

export const KEY_Sinh_ru2: number;

export const KEY_Sinh_ruu2: number;

export const KEY_Sinh_sa: number;

export const KEY_Sinh_sha: number;

export const KEY_Sinh_ssha: number;

export const KEY_Sinh_tha: number;

export const KEY_Sinh_thha: number;

export const KEY_Sinh_tta: number;

export const KEY_Sinh_ttha: number;

export const KEY_Sinh_u: number;

export const KEY_Sinh_u2: number;

export const KEY_Sinh_uu: number;

export const KEY_Sinh_uu2: number;

export const KEY_Sinh_va: number;

export const KEY_Sinh_ya: number;

export const KEY_Sleep: number;

export const KEY_SlowKeys_Enable: number;

export const KEY_Spell: number;

export const KEY_SplitScreen: number;

export const KEY_Standby: number;

export const KEY_Start: number;

export const KEY_StickyKeys_Enable: number;

export const KEY_Stop: number;

export const KEY_Subtitle: number;

export const KEY_Super_L: number;

export const KEY_Super_R: number;

export const KEY_Support: number;

export const KEY_Suspend: number;

export const KEY_Switch_VT_1: number;

export const KEY_Switch_VT_10: number;

export const KEY_Switch_VT_11: number;

export const KEY_Switch_VT_12: number;

export const KEY_Switch_VT_2: number;

export const KEY_Switch_VT_3: number;

export const KEY_Switch_VT_4: number;

export const KEY_Switch_VT_5: number;

export const KEY_Switch_VT_6: number;

export const KEY_Switch_VT_7: number;

export const KEY_Switch_VT_8: number;

export const KEY_Switch_VT_9: number;

export const KEY_Sys_Req: number;

export const KEY_T: number;

export const KEY_THORN: number;

export const KEY_Tab: number;

export const KEY_Tabovedot: number;

export const KEY_TaskPane: number;

export const KEY_Tcaron: number;

export const KEY_Tcedilla: number;

export const KEY_Terminal: number;

export const KEY_Terminate_Server: number;

export const KEY_Thai_baht: number;

export const KEY_Thai_bobaimai: number;

export const KEY_Thai_chochan: number;

export const KEY_Thai_chochang: number;

export const KEY_Thai_choching: number;

export const KEY_Thai_chochoe: number;

export const KEY_Thai_dochada: number;

export const KEY_Thai_dodek: number;

export const KEY_Thai_fofa: number;

export const KEY_Thai_fofan: number;

export const KEY_Thai_hohip: number;

export const KEY_Thai_honokhuk: number;

export const KEY_Thai_khokhai: number;

export const KEY_Thai_khokhon: number;

export const KEY_Thai_khokhuat: number;

export const KEY_Thai_khokhwai: number;

export const KEY_Thai_khorakhang: number;

export const KEY_Thai_kokai: number;

export const KEY_Thai_lakkhangyao: number;

export const KEY_Thai_lekchet: number;

export const KEY_Thai_lekha: number;

export const KEY_Thai_lekhok: number;

export const KEY_Thai_lekkao: number;

export const KEY_Thai_leknung: number;

export const KEY_Thai_lekpaet: number;

export const KEY_Thai_leksam: number;

export const KEY_Thai_leksi: number;

export const KEY_Thai_leksong: number;

export const KEY_Thai_leksun: number;

export const KEY_Thai_lochula: number;

export const KEY_Thai_loling: number;

export const KEY_Thai_lu: number;

export const KEY_Thai_maichattawa: number;

export const KEY_Thai_maiek: number;

export const KEY_Thai_maihanakat: number;

export const KEY_Thai_maihanakat_maitho: number;

export const KEY_Thai_maitaikhu: number;

export const KEY_Thai_maitho: number;

export const KEY_Thai_maitri: number;

export const KEY_Thai_maiyamok: number;

export const KEY_Thai_moma: number;

export const KEY_Thai_ngongu: number;

export const KEY_Thai_nikhahit: number;

export const KEY_Thai_nonen: number;

export const KEY_Thai_nonu: number;

export const KEY_Thai_oang: number;

export const KEY_Thai_paiyannoi: number;

export const KEY_Thai_phinthu: number;

export const KEY_Thai_phophan: number;

export const KEY_Thai_phophung: number;

export const KEY_Thai_phosamphao: number;

export const KEY_Thai_popla: number;

export const KEY_Thai_rorua: number;

export const KEY_Thai_ru: number;

export const KEY_Thai_saraa: number;

export const KEY_Thai_saraaa: number;

export const KEY_Thai_saraae: number;

export const KEY_Thai_saraaimaimalai: number;

export const KEY_Thai_saraaimaimuan: number;

export const KEY_Thai_saraam: number;

export const KEY_Thai_sarae: number;

export const KEY_Thai_sarai: number;

export const KEY_Thai_saraii: number;

export const KEY_Thai_sarao: number;

export const KEY_Thai_sarau: number;

export const KEY_Thai_saraue: number;

export const KEY_Thai_sarauee: number;

export const KEY_Thai_sarauu: number;

export const KEY_Thai_sorusi: number;

export const KEY_Thai_sosala: number;

export const KEY_Thai_soso: number;

export const KEY_Thai_sosua: number;

export const KEY_Thai_thanthakhat: number;

export const KEY_Thai_thonangmontho: number;

export const KEY_Thai_thophuthao: number;

export const KEY_Thai_thothahan: number;

export const KEY_Thai_thothan: number;

export const KEY_Thai_thothong: number;

export const KEY_Thai_thothung: number;

export const KEY_Thai_topatak: number;

export const KEY_Thai_totao: number;

export const KEY_Thai_wowaen: number;

export const KEY_Thai_yoyak: number;

export const KEY_Thai_yoying: number;

export const KEY_Thorn: number;

export const KEY_Time: number;

export const KEY_ToDoList: number;

export const KEY_Tools: number;

export const KEY_TopMenu: number;

export const KEY_TouchpadOff: number;

export const KEY_TouchpadOn: number;

export const KEY_TouchpadToggle: number;

export const KEY_Touroku: number;

export const KEY_Travel: number;

export const KEY_Tslash: number;

export const KEY_U: number;

export const KEY_UWB: number;

export const KEY_Uacute: number;

export const KEY_Ubelowdot: number;

export const KEY_Ubreve: number;

export const KEY_Ucircumflex: number;

export const KEY_Udiaeresis: number;

export const KEY_Udoubleacute: number;

export const KEY_Ugrave: number;

export const KEY_Uhook: number;

export const KEY_Uhorn: number;

export const KEY_Uhornacute: number;

export const KEY_Uhornbelowdot: number;

export const KEY_Uhorngrave: number;

export const KEY_Uhornhook: number;

export const KEY_Uhorntilde: number;

export const KEY_Ukrainian_GHE_WITH_UPTURN: number;

export const KEY_Ukrainian_I: number;

export const KEY_Ukrainian_IE: number;

export const KEY_Ukrainian_YI: number;

export const KEY_Ukrainian_ghe_with_upturn: number;

export const KEY_Ukrainian_i: number;

export const KEY_Ukrainian_ie: number;

export const KEY_Ukrainian_yi: number;

export const KEY_Ukranian_I: number;

export const KEY_Ukranian_JE: number;

export const KEY_Ukranian_YI: number;

export const KEY_Ukranian_i: number;

export const KEY_Ukranian_je: number;

export const KEY_Ukranian_yi: number;

export const KEY_Umacron: number;

export const KEY_Undo: number;

export const KEY_Ungrab: number;

export const KEY_Uogonek: number;

export const KEY_Up: number;

export const KEY_Uring: number;

export const KEY_User1KB: number;

export const KEY_User2KB: number;

export const KEY_UserPB: number;

export const KEY_Utilde: number;

export const KEY_V: number;

export const KEY_VendorHome: number;

export const KEY_Video: number;

export const KEY_View: number;

export const KEY_VoidSymbol: number;

export const KEY_W: number;

export const KEY_WLAN: number;

export const KEY_WWW: number;

export const KEY_Wacute: number;

export const KEY_WakeUp: number;

export const KEY_Wcircumflex: number;

export const KEY_Wdiaeresis: number;

export const KEY_WebCam: number;

export const KEY_Wgrave: number;

export const KEY_WheelButton: number;

export const KEY_WindowClear: number;

export const KEY_WonSign: number;

export const KEY_Word: number;

export const KEY_X: number;

export const KEY_Xabovedot: number;

export const KEY_Xfer: number;

export const KEY_Y: number;

export const KEY_Yacute: number;

export const KEY_Ybelowdot: number;

export const KEY_Ycircumflex: number;

export const KEY_Ydiaeresis: number;

export const KEY_Yellow: number;

export const KEY_Ygrave: number;

export const KEY_Yhook: number;

export const KEY_Ytilde: number;

export const KEY_Z: number;

export const KEY_Zabovedot: number;

export const KEY_Zacute: number;

export const KEY_Zcaron: number;

export const KEY_Zen_Koho: number;

export const KEY_Zenkaku: number;

export const KEY_Zenkaku_Hankaku: number;

export const KEY_ZoomIn: number;

export const KEY_ZoomOut: number;

export const KEY_Zstroke: number;

export const KEY_a: number;

export const KEY_aacute: number;

export const KEY_abelowdot: number;

export const KEY_abovedot: number;

export const KEY_abreve: number;

export const KEY_abreveacute: number;

export const KEY_abrevebelowdot: number;

export const KEY_abrevegrave: number;

export const KEY_abrevehook: number;

export const KEY_abrevetilde: number;

export const KEY_acircumflex: number;

export const KEY_acircumflexacute: number;

export const KEY_acircumflexbelowdot: number;

export const KEY_acircumflexgrave: number;

export const KEY_acircumflexhook: number;

export const KEY_acircumflextilde: number;

export const KEY_acute: number;

export const KEY_adiaeresis: number;

export const KEY_ae: number;

export const KEY_agrave: number;

export const KEY_ahook: number;

export const KEY_amacron: number;

export const KEY_ampersand: number;

export const KEY_aogonek: number;

export const KEY_apostrophe: number;

export const KEY_approxeq: number;

export const KEY_approximate: number;

export const KEY_aring: number;

export const KEY_asciicircum: number;

export const KEY_asciitilde: number;

export const KEY_asterisk: number;

export const KEY_at: number;

export const KEY_atilde: number;

export const KEY_b: number;

export const KEY_babovedot: number;

export const KEY_backslash: number;

export const KEY_ballotcross: number;

export const KEY_bar: number;

export const KEY_because: number;

export const KEY_blank: number;

export const KEY_botintegral: number;

export const KEY_botleftparens: number;

export const KEY_botleftsqbracket: number;

export const KEY_botleftsummation: number;

export const KEY_botrightparens: number;

export const KEY_botrightsqbracket: number;

export const KEY_botrightsummation: number;

export const KEY_bott: number;

export const KEY_botvertsummationconnector: number;

export const KEY_braceleft: number;

export const KEY_braceright: number;

export const KEY_bracketleft: number;

export const KEY_bracketright: number;

export const KEY_braille_blank: number;

export const KEY_braille_dot_1: number;

export const KEY_braille_dot_10: number;

export const KEY_braille_dot_2: number;

export const KEY_braille_dot_3: number;

export const KEY_braille_dot_4: number;

export const KEY_braille_dot_5: number;

export const KEY_braille_dot_6: number;

export const KEY_braille_dot_7: number;

export const KEY_braille_dot_8: number;

export const KEY_braille_dot_9: number;

export const KEY_braille_dots_1: number;

export const KEY_braille_dots_12: number;

export const KEY_braille_dots_123: number;

export const KEY_braille_dots_1234: number;

export const KEY_braille_dots_12345: number;

export const KEY_braille_dots_123456: number;

export const KEY_braille_dots_1234567: number;

export const KEY_braille_dots_12345678: number;

export const KEY_braille_dots_1234568: number;

export const KEY_braille_dots_123457: number;

export const KEY_braille_dots_1234578: number;

export const KEY_braille_dots_123458: number;

export const KEY_braille_dots_12346: number;

export const KEY_braille_dots_123467: number;

export const KEY_braille_dots_1234678: number;

export const KEY_braille_dots_123468: number;

export const KEY_braille_dots_12347: number;

export const KEY_braille_dots_123478: number;

export const KEY_braille_dots_12348: number;

export const KEY_braille_dots_1235: number;

export const KEY_braille_dots_12356: number;

export const KEY_braille_dots_123567: number;

export const KEY_braille_dots_1235678: number;

export const KEY_braille_dots_123568: number;

export const KEY_braille_dots_12357: number;

export const KEY_braille_dots_123578: number;

export const KEY_braille_dots_12358: number;

export const KEY_braille_dots_1236: number;

export const KEY_braille_dots_12367: number;

export const KEY_braille_dots_123678: number;

export const KEY_braille_dots_12368: number;

export const KEY_braille_dots_1237: number;

export const KEY_braille_dots_12378: number;

export const KEY_braille_dots_1238: number;

export const KEY_braille_dots_124: number;

export const KEY_braille_dots_1245: number;

export const KEY_braille_dots_12456: number;

export const KEY_braille_dots_124567: number;

export const KEY_braille_dots_1245678: number;

export const KEY_braille_dots_124568: number;

export const KEY_braille_dots_12457: number;

export const KEY_braille_dots_124578: number;

export const KEY_braille_dots_12458: number;

export const KEY_braille_dots_1246: number;

export const KEY_braille_dots_12467: number;

export const KEY_braille_dots_124678: number;

export const KEY_braille_dots_12468: number;

export const KEY_braille_dots_1247: number;

export const KEY_braille_dots_12478: number;

export const KEY_braille_dots_1248: number;

export const KEY_braille_dots_125: number;

export const KEY_braille_dots_1256: number;

export const KEY_braille_dots_12567: number;

export const KEY_braille_dots_125678: number;

export const KEY_braille_dots_12568: number;

export const KEY_braille_dots_1257: number;

export const KEY_braille_dots_12578: number;

export const KEY_braille_dots_1258: number;

export const KEY_braille_dots_126: number;

export const KEY_braille_dots_1267: number;

export const KEY_braille_dots_12678: number;

export const KEY_braille_dots_1268: number;

export const KEY_braille_dots_127: number;

export const KEY_braille_dots_1278: number;

export const KEY_braille_dots_128: number;

export const KEY_braille_dots_13: number;

export const KEY_braille_dots_134: number;

export const KEY_braille_dots_1345: number;

export const KEY_braille_dots_13456: number;

export const KEY_braille_dots_134567: number;

export const KEY_braille_dots_1345678: number;

export const KEY_braille_dots_134568: number;

export const KEY_braille_dots_13457: number;

export const KEY_braille_dots_134578: number;

export const KEY_braille_dots_13458: number;

export const KEY_braille_dots_1346: number;

export const KEY_braille_dots_13467: number;

export const KEY_braille_dots_134678: number;

export const KEY_braille_dots_13468: number;

export const KEY_braille_dots_1347: number;

export const KEY_braille_dots_13478: number;

export const KEY_braille_dots_1348: number;

export const KEY_braille_dots_135: number;

export const KEY_braille_dots_1356: number;

export const KEY_braille_dots_13567: number;

export const KEY_braille_dots_135678: number;

export const KEY_braille_dots_13568: number;

export const KEY_braille_dots_1357: number;

export const KEY_braille_dots_13578: number;

export const KEY_braille_dots_1358: number;

export const KEY_braille_dots_136: number;

export const KEY_braille_dots_1367: number;

export const KEY_braille_dots_13678: number;

export const KEY_braille_dots_1368: number;

export const KEY_braille_dots_137: number;

export const KEY_braille_dots_1378: number;

export const KEY_braille_dots_138: number;

export const KEY_braille_dots_14: number;

export const KEY_braille_dots_145: number;

export const KEY_braille_dots_1456: number;

export const KEY_braille_dots_14567: number;

export const KEY_braille_dots_145678: number;

export const KEY_braille_dots_14568: number;

export const KEY_braille_dots_1457: number;

export const KEY_braille_dots_14578: number;

export const KEY_braille_dots_1458: number;

export const KEY_braille_dots_146: number;

export const KEY_braille_dots_1467: number;

export const KEY_braille_dots_14678: number;

export const KEY_braille_dots_1468: number;

export const KEY_braille_dots_147: number;

export const KEY_braille_dots_1478: number;

export const KEY_braille_dots_148: number;

export const KEY_braille_dots_15: number;

export const KEY_braille_dots_156: number;

export const KEY_braille_dots_1567: number;

export const KEY_braille_dots_15678: number;

export const KEY_braille_dots_1568: number;

export const KEY_braille_dots_157: number;

export const KEY_braille_dots_1578: number;

export const KEY_braille_dots_158: number;

export const KEY_braille_dots_16: number;

export const KEY_braille_dots_167: number;

export const KEY_braille_dots_1678: number;

export const KEY_braille_dots_168: number;

export const KEY_braille_dots_17: number;

export const KEY_braille_dots_178: number;

export const KEY_braille_dots_18: number;

export const KEY_braille_dots_2: number;

export const KEY_braille_dots_23: number;

export const KEY_braille_dots_234: number;

export const KEY_braille_dots_2345: number;

export const KEY_braille_dots_23456: number;

export const KEY_braille_dots_234567: number;

export const KEY_braille_dots_2345678: number;

export const KEY_braille_dots_234568: number;

export const KEY_braille_dots_23457: number;

export const KEY_braille_dots_234578: number;

export const KEY_braille_dots_23458: number;

export const KEY_braille_dots_2346: number;

export const KEY_braille_dots_23467: number;

export const KEY_braille_dots_234678: number;

export const KEY_braille_dots_23468: number;

export const KEY_braille_dots_2347: number;

export const KEY_braille_dots_23478: number;

export const KEY_braille_dots_2348: number;

export const KEY_braille_dots_235: number;

export const KEY_braille_dots_2356: number;

export const KEY_braille_dots_23567: number;

export const KEY_braille_dots_235678: number;

export const KEY_braille_dots_23568: number;

export const KEY_braille_dots_2357: number;

export const KEY_braille_dots_23578: number;

export const KEY_braille_dots_2358: number;

export const KEY_braille_dots_236: number;

export const KEY_braille_dots_2367: number;

export const KEY_braille_dots_23678: number;

export const KEY_braille_dots_2368: number;

export const KEY_braille_dots_237: number;

export const KEY_braille_dots_2378: number;

export const KEY_braille_dots_238: number;

export const KEY_braille_dots_24: number;

export const KEY_braille_dots_245: number;

export const KEY_braille_dots_2456: number;

export const KEY_braille_dots_24567: number;

export const KEY_braille_dots_245678: number;

export const KEY_braille_dots_24568: number;

export const KEY_braille_dots_2457: number;

export const KEY_braille_dots_24578: number;

export const KEY_braille_dots_2458: number;

export const KEY_braille_dots_246: number;

export const KEY_braille_dots_2467: number;

export const KEY_braille_dots_24678: number;

export const KEY_braille_dots_2468: number;

export const KEY_braille_dots_247: number;

export const KEY_braille_dots_2478: number;

export const KEY_braille_dots_248: number;

export const KEY_braille_dots_25: number;

export const KEY_braille_dots_256: number;

export const KEY_braille_dots_2567: number;

export const KEY_braille_dots_25678: number;

export const KEY_braille_dots_2568: number;

export const KEY_braille_dots_257: number;

export const KEY_braille_dots_2578: number;

export const KEY_braille_dots_258: number;

export const KEY_braille_dots_26: number;

export const KEY_braille_dots_267: number;

export const KEY_braille_dots_2678: number;

export const KEY_braille_dots_268: number;

export const KEY_braille_dots_27: number;

export const KEY_braille_dots_278: number;

export const KEY_braille_dots_28: number;

export const KEY_braille_dots_3: number;

export const KEY_braille_dots_34: number;

export const KEY_braille_dots_345: number;

export const KEY_braille_dots_3456: number;

export const KEY_braille_dots_34567: number;

export const KEY_braille_dots_345678: number;

export const KEY_braille_dots_34568: number;

export const KEY_braille_dots_3457: number;

export const KEY_braille_dots_34578: number;

export const KEY_braille_dots_3458: number;

export const KEY_braille_dots_346: number;

export const KEY_braille_dots_3467: number;

export const KEY_braille_dots_34678: number;

export const KEY_braille_dots_3468: number;

export const KEY_braille_dots_347: number;

export const KEY_braille_dots_3478: number;

export const KEY_braille_dots_348: number;

export const KEY_braille_dots_35: number;

export const KEY_braille_dots_356: number;

export const KEY_braille_dots_3567: number;

export const KEY_braille_dots_35678: number;

export const KEY_braille_dots_3568: number;

export const KEY_braille_dots_357: number;

export const KEY_braille_dots_3578: number;

export const KEY_braille_dots_358: number;

export const KEY_braille_dots_36: number;

export const KEY_braille_dots_367: number;

export const KEY_braille_dots_3678: number;

export const KEY_braille_dots_368: number;

export const KEY_braille_dots_37: number;

export const KEY_braille_dots_378: number;

export const KEY_braille_dots_38: number;

export const KEY_braille_dots_4: number;

export const KEY_braille_dots_45: number;

export const KEY_braille_dots_456: number;

export const KEY_braille_dots_4567: number;

export const KEY_braille_dots_45678: number;

export const KEY_braille_dots_4568: number;

export const KEY_braille_dots_457: number;

export const KEY_braille_dots_4578: number;

export const KEY_braille_dots_458: number;

export const KEY_braille_dots_46: number;

export const KEY_braille_dots_467: number;

export const KEY_braille_dots_4678: number;

export const KEY_braille_dots_468: number;

export const KEY_braille_dots_47: number;

export const KEY_braille_dots_478: number;

export const KEY_braille_dots_48: number;

export const KEY_braille_dots_5: number;

export const KEY_braille_dots_56: number;

export const KEY_braille_dots_567: number;

export const KEY_braille_dots_5678: number;

export const KEY_braille_dots_568: number;

export const KEY_braille_dots_57: number;

export const KEY_braille_dots_578: number;

export const KEY_braille_dots_58: number;

export const KEY_braille_dots_6: number;

export const KEY_braille_dots_67: number;

export const KEY_braille_dots_678: number;

export const KEY_braille_dots_68: number;

export const KEY_braille_dots_7: number;

export const KEY_braille_dots_78: number;

export const KEY_braille_dots_8: number;

export const KEY_breve: number;

export const KEY_brokenbar: number;

export const KEY_c: number;

export const KEY_c_h: number;

export const KEY_cabovedot: number;

export const KEY_cacute: number;

export const KEY_careof: number;

export const KEY_caret: number;

export const KEY_caron: number;

export const KEY_ccaron: number;

export const KEY_ccedilla: number;

export const KEY_ccircumflex: number;

export const KEY_cedilla: number;

export const KEY_cent: number;

export const KEY_ch: number;

export const KEY_checkerboard: number;

export const KEY_checkmark: number;

export const KEY_circle: number;

export const KEY_club: number;

export const KEY_colon: number;

export const KEY_comma: number;

export const KEY_containsas: number;

export const KEY_copyright: number;

export const KEY_cr: number;

export const KEY_crossinglines: number;

export const KEY_cuberoot: number;

export const KEY_currency: number;

export const KEY_cursor: number;

export const KEY_d: number;

export const KEY_dabovedot: number;

export const KEY_dagger: number;

export const KEY_dcaron: number;

export const KEY_dead_A: number;

export const KEY_dead_E: number;

export const KEY_dead_I: number;

export const KEY_dead_O: number;

export const KEY_dead_U: number;

export const KEY_dead_a: number;

export const KEY_dead_abovecomma: number;

export const KEY_dead_abovedot: number;

export const KEY_dead_abovereversedcomma: number;

export const KEY_dead_abovering: number;

export const KEY_dead_aboveverticalline: number;

export const KEY_dead_acute: number;

export const KEY_dead_belowbreve: number;

export const KEY_dead_belowcircumflex: number;

export const KEY_dead_belowcomma: number;

export const KEY_dead_belowdiaeresis: number;

export const KEY_dead_belowdot: number;

export const KEY_dead_belowmacron: number;

export const KEY_dead_belowring: number;

export const KEY_dead_belowtilde: number;

export const KEY_dead_belowverticalline: number;

export const KEY_dead_breve: number;

export const KEY_dead_capital_schwa: number;

export const KEY_dead_caron: number;

export const KEY_dead_cedilla: number;

export const KEY_dead_circumflex: number;

export const KEY_dead_currency: number;

export const KEY_dead_dasia: number;

export const KEY_dead_diaeresis: number;

export const KEY_dead_doubleacute: number;

export const KEY_dead_doublegrave: number;

export const KEY_dead_e: number;

export const KEY_dead_grave: number;

export const KEY_dead_greek: number;

export const KEY_dead_hook: number;

export const KEY_dead_horn: number;

export const KEY_dead_i: number;

export const KEY_dead_invertedbreve: number;

export const KEY_dead_iota: number;

export const KEY_dead_longsolidusoverlay: number;

export const KEY_dead_lowline: number;

export const KEY_dead_macron: number;

export const KEY_dead_o: number;

export const KEY_dead_ogonek: number;

export const KEY_dead_perispomeni: number;

export const KEY_dead_psili: number;

export const KEY_dead_semivoiced_sound: number;

export const KEY_dead_small_schwa: number;

export const KEY_dead_stroke: number;

export const KEY_dead_tilde: number;

export const KEY_dead_u: number;

export const KEY_dead_voiced_sound: number;

export const KEY_decimalpoint: number;

export const KEY_degree: number;

export const KEY_diaeresis: number;

export const KEY_diamond: number;

export const KEY_digitspace: number;

export const KEY_dintegral: number;

export const KEY_division: number;

export const KEY_dollar: number;

export const KEY_doubbaselinedot: number;

export const KEY_doubleacute: number;

export const KEY_doubledagger: number;

export const KEY_doublelowquotemark: number;

export const KEY_downarrow: number;

export const KEY_downcaret: number;

export const KEY_downshoe: number;

export const KEY_downstile: number;

export const KEY_downtack: number;

export const KEY_dstroke: number;

export const KEY_e: number;

export const KEY_eabovedot: number;

export const KEY_eacute: number;

export const KEY_ebelowdot: number;

export const KEY_ecaron: number;

export const KEY_ecircumflex: number;

export const KEY_ecircumflexacute: number;

export const KEY_ecircumflexbelowdot: number;

export const KEY_ecircumflexgrave: number;

export const KEY_ecircumflexhook: number;

export const KEY_ecircumflextilde: number;

export const KEY_ediaeresis: number;

export const KEY_egrave: number;

export const KEY_ehook: number;

export const KEY_eightsubscript: number;

export const KEY_eightsuperior: number;

export const KEY_elementof: number;

export const KEY_ellipsis: number;

export const KEY_em3space: number;

export const KEY_em4space: number;

export const KEY_emacron: number;

export const KEY_emdash: number;

export const KEY_emfilledcircle: number;

export const KEY_emfilledrect: number;

export const KEY_emopencircle: number;

export const KEY_emopenrectangle: number;

export const KEY_emptyset: number;

export const KEY_emspace: number;

export const KEY_endash: number;

export const KEY_enfilledcircbullet: number;

export const KEY_enfilledsqbullet: number;

export const KEY_eng: number;

export const KEY_enopencircbullet: number;

export const KEY_enopensquarebullet: number;

export const KEY_enspace: number;

export const KEY_eogonek: number;

export const KEY_equal: number;

export const KEY_eth: number;

export const KEY_etilde: number;

export const KEY_exclam: number;

export const KEY_exclamdown: number;

export const KEY_ezh: number;

export const KEY_f: number;

export const KEY_fabovedot: number;

export const KEY_femalesymbol: number;

export const KEY_ff: number;

export const KEY_figdash: number;

export const KEY_filledlefttribullet: number;

export const KEY_filledrectbullet: number;

export const KEY_filledrighttribullet: number;

export const KEY_filledtribulletdown: number;

export const KEY_filledtribulletup: number;

export const KEY_fiveeighths: number;

export const KEY_fivesixths: number;

export const KEY_fivesubscript: number;

export const KEY_fivesuperior: number;

export const KEY_fourfifths: number;

export const KEY_foursubscript: number;

export const KEY_foursuperior: number;

export const KEY_fourthroot: number;

export const KEY_function: number;

export const KEY_g: number;

export const KEY_gabovedot: number;

export const KEY_gbreve: number;

export const KEY_gcaron: number;

export const KEY_gcedilla: number;

export const KEY_gcircumflex: number;

export const KEY_grave: number;

export const KEY_greater: number;

export const KEY_greaterthanequal: number;

export const KEY_guillemotleft: number;

export const KEY_guillemotright: number;

export const KEY_h: number;

export const KEY_hairspace: number;

export const KEY_hcircumflex: number;

export const KEY_heart: number;

export const KEY_hebrew_aleph: number;

export const KEY_hebrew_ayin: number;

export const KEY_hebrew_bet: number;

export const KEY_hebrew_beth: number;

export const KEY_hebrew_chet: number;

export const KEY_hebrew_dalet: number;

export const KEY_hebrew_daleth: number;

export const KEY_hebrew_doublelowline: number;

export const KEY_hebrew_finalkaph: number;

export const KEY_hebrew_finalmem: number;

export const KEY_hebrew_finalnun: number;

export const KEY_hebrew_finalpe: number;

export const KEY_hebrew_finalzade: number;

export const KEY_hebrew_finalzadi: number;

export const KEY_hebrew_gimel: number;

export const KEY_hebrew_gimmel: number;

export const KEY_hebrew_he: number;

export const KEY_hebrew_het: number;

export const KEY_hebrew_kaph: number;

export const KEY_hebrew_kuf: number;

export const KEY_hebrew_lamed: number;

export const KEY_hebrew_mem: number;

export const KEY_hebrew_nun: number;

export const KEY_hebrew_pe: number;

export const KEY_hebrew_qoph: number;

export const KEY_hebrew_resh: number;

export const KEY_hebrew_samech: number;

export const KEY_hebrew_samekh: number;

export const KEY_hebrew_shin: number;

export const KEY_hebrew_taf: number;

export const KEY_hebrew_taw: number;

export const KEY_hebrew_tet: number;

export const KEY_hebrew_teth: number;

export const KEY_hebrew_waw: number;

export const KEY_hebrew_yod: number;

export const KEY_hebrew_zade: number;

export const KEY_hebrew_zadi: number;

export const KEY_hebrew_zain: number;

export const KEY_hebrew_zayin: number;

export const KEY_hexagram: number;

export const KEY_horizconnector: number;

export const KEY_horizlinescan1: number;

export const KEY_horizlinescan3: number;

export const KEY_horizlinescan5: number;

export const KEY_horizlinescan7: number;

export const KEY_horizlinescan9: number;

export const KEY_hstroke: number;

export const KEY_ht: number;

export const KEY_hyphen: number;

export const KEY_i: number;

export const KEY_iTouch: number;

export const KEY_iacute: number;

export const KEY_ibelowdot: number;

export const KEY_ibreve: number;

export const KEY_icircumflex: number;

export const KEY_identical: number;

export const KEY_idiaeresis: number;

export const KEY_idotless: number;

export const KEY_ifonlyif: number;

export const KEY_igrave: number;

export const KEY_ihook: number;

export const KEY_imacron: number;

export const KEY_implies: number;

export const KEY_includedin: number;

export const KEY_includes: number;

export const KEY_infinity: number;

export const KEY_integral: number;

export const KEY_intersection: number;

export const KEY_iogonek: number;

export const KEY_itilde: number;

export const KEY_j: number;

export const KEY_jcircumflex: number;

export const KEY_jot: number;

export const KEY_k: number;

export const KEY_kana_A: number;

export const KEY_kana_CHI: number;

export const KEY_kana_E: number;

export const KEY_kana_FU: number;

export const KEY_kana_HA: number;

export const KEY_kana_HE: number;

export const KEY_kana_HI: number;

export const KEY_kana_HO: number;

export const KEY_kana_HU: number;

export const KEY_kana_I: number;

export const KEY_kana_KA: number;

export const KEY_kana_KE: number;

export const KEY_kana_KI: number;

export const KEY_kana_KO: number;

export const KEY_kana_KU: number;

export const KEY_kana_MA: number;

export const KEY_kana_ME: number;

export const KEY_kana_MI: number;

export const KEY_kana_MO: number;

export const KEY_kana_MU: number;

export const KEY_kana_N: number;

export const KEY_kana_NA: number;

export const KEY_kana_NE: number;

export const KEY_kana_NI: number;

export const KEY_kana_NO: number;

export const KEY_kana_NU: number;

export const KEY_kana_O: number;

export const KEY_kana_RA: number;

export const KEY_kana_RE: number;

export const KEY_kana_RI: number;

export const KEY_kana_RO: number;

export const KEY_kana_RU: number;

export const KEY_kana_SA: number;

export const KEY_kana_SE: number;

export const KEY_kana_SHI: number;

export const KEY_kana_SO: number;

export const KEY_kana_SU: number;

export const KEY_kana_TA: number;

export const KEY_kana_TE: number;

export const KEY_kana_TI: number;

export const KEY_kana_TO: number;

export const KEY_kana_TSU: number;

export const KEY_kana_TU: number;

export const KEY_kana_U: number;

export const KEY_kana_WA: number;

export const KEY_kana_WO: number;

export const KEY_kana_YA: number;

export const KEY_kana_YO: number;

export const KEY_kana_YU: number;

export const KEY_kana_a: number;

export const KEY_kana_closingbracket: number;

export const KEY_kana_comma: number;

export const KEY_kana_conjunctive: number;

export const KEY_kana_e: number;

export const KEY_kana_fullstop: number;

export const KEY_kana_i: number;

export const KEY_kana_middledot: number;

export const KEY_kana_o: number;

export const KEY_kana_openingbracket: number;

export const KEY_kana_switch: number;

export const KEY_kana_tsu: number;

export const KEY_kana_tu: number;

export const KEY_kana_u: number;

export const KEY_kana_ya: number;

export const KEY_kana_yo: number;

export const KEY_kana_yu: number;

export const KEY_kappa: number;

export const KEY_kcedilla: number;

export const KEY_kra: number;

export const KEY_l: number;

export const KEY_lacute: number;

export const KEY_latincross: number;

export const KEY_lbelowdot: number;

export const KEY_lcaron: number;

export const KEY_lcedilla: number;

export const KEY_leftanglebracket: number;

export const KEY_leftarrow: number;

export const KEY_leftcaret: number;

export const KEY_leftdoublequotemark: number;

export const KEY_leftmiddlecurlybrace: number;

export const KEY_leftopentriangle: number;

export const KEY_leftpointer: number;

export const KEY_leftradical: number;

export const KEY_leftshoe: number;

export const KEY_leftsinglequotemark: number;

export const KEY_leftt: number;

export const KEY_lefttack: number;

export const KEY_less: number;

export const KEY_lessthanequal: number;

export const KEY_lf: number;

export const KEY_logicaland: number;

export const KEY_logicalor: number;

export const KEY_lowleftcorner: number;

export const KEY_lowrightcorner: number;

export const KEY_lstroke: number;

export const KEY_m: number;

export const KEY_mabovedot: number;

export const KEY_macron: number;

export const KEY_malesymbol: number;

export const KEY_maltesecross: number;

export const KEY_marker: number;

export const KEY_masculine: number;

export const KEY_minus: number;

export const KEY_minutes: number;

export const KEY_mu: number;

export const KEY_multiply: number;

export const KEY_musicalflat: number;

export const KEY_musicalsharp: number;

export const KEY_n: number;

export const KEY_nabla: number;

export const KEY_nacute: number;

export const KEY_ncaron: number;

export const KEY_ncedilla: number;

export const KEY_ninesubscript: number;

export const KEY_ninesuperior: number;

export const KEY_nl: number;

export const KEY_nobreakspace: number;

export const KEY_notapproxeq: number;

export const KEY_notelementof: number;

export const KEY_notequal: number;

export const KEY_notidentical: number;

export const KEY_notsign: number;

export const KEY_ntilde: number;

export const KEY_numbersign: number;

export const KEY_numerosign: number;

export const KEY_o: number;

export const KEY_oacute: number;

export const KEY_obarred: number;

export const KEY_obelowdot: number;

export const KEY_ocaron: number;

export const KEY_ocircumflex: number;

export const KEY_ocircumflexacute: number;

export const KEY_ocircumflexbelowdot: number;

export const KEY_ocircumflexgrave: number;

export const KEY_ocircumflexhook: number;

export const KEY_ocircumflextilde: number;

export const KEY_odiaeresis: number;

export const KEY_odoubleacute: number;

export const KEY_oe: number;

export const KEY_ogonek: number;

export const KEY_ograve: number;

export const KEY_ohook: number;

export const KEY_ohorn: number;

export const KEY_ohornacute: number;

export const KEY_ohornbelowdot: number;

export const KEY_ohorngrave: number;

export const KEY_ohornhook: number;

export const KEY_ohorntilde: number;

export const KEY_omacron: number;

export const KEY_oneeighth: number;

export const KEY_onefifth: number;

export const KEY_onehalf: number;

export const KEY_onequarter: number;

export const KEY_onesixth: number;

export const KEY_onesubscript: number;

export const KEY_onesuperior: number;

export const KEY_onethird: number;

export const KEY_ooblique: number;

export const KEY_openrectbullet: number;

export const KEY_openstar: number;

export const KEY_opentribulletdown: number;

export const KEY_opentribulletup: number;

export const KEY_ordfeminine: number;

export const KEY_oslash: number;

export const KEY_otilde: number;

export const KEY_overbar: number;

export const KEY_overline: number;

export const KEY_p: number;

export const KEY_pabovedot: number;

export const KEY_paragraph: number;

export const KEY_parenleft: number;

export const KEY_parenright: number;

export const KEY_partdifferential: number;

export const KEY_partialderivative: number;

export const KEY_percent: number;

export const KEY_period: number;

export const KEY_periodcentered: number;

export const KEY_permille: number;

export const KEY_phonographcopyright: number;

export const KEY_plus: number;

export const KEY_plusminus: number;

export const KEY_prescription: number;

export const KEY_prolongedsound: number;

export const KEY_punctspace: number;

export const KEY_q: number;

export const KEY_quad: number;

export const KEY_question: number;

export const KEY_questiondown: number;

export const KEY_quotedbl: number;

export const KEY_quoteleft: number;

export const KEY_quoteright: number;

export const KEY_r: number;

export const KEY_racute: number;

export const KEY_radical: number;

export const KEY_rcaron: number;

export const KEY_rcedilla: number;

export const KEY_registered: number;

export const KEY_rightanglebracket: number;

export const KEY_rightarrow: number;

export const KEY_rightcaret: number;

export const KEY_rightdoublequotemark: number;

export const KEY_rightmiddlecurlybrace: number;

export const KEY_rightmiddlesummation: number;

export const KEY_rightopentriangle: number;

export const KEY_rightpointer: number;

export const KEY_rightshoe: number;

export const KEY_rightsinglequotemark: number;

export const KEY_rightt: number;

export const KEY_righttack: number;

export const KEY_s: number;

export const KEY_sabovedot: number;

export const KEY_sacute: number;

export const KEY_scaron: number;

export const KEY_scedilla: number;

export const KEY_schwa: number;

export const KEY_scircumflex: number;

export const KEY_script_switch: number;

export const KEY_seconds: number;

export const KEY_section: number;

export const KEY_semicolon: number;

export const KEY_semivoicedsound: number;

export const KEY_seveneighths: number;

export const KEY_sevensubscript: number;

export const KEY_sevensuperior: number;

export const KEY_signaturemark: number;

export const KEY_signifblank: number;

export const KEY_similarequal: number;

export const KEY_singlelowquotemark: number;

export const KEY_sixsubscript: number;

export const KEY_sixsuperior: number;

export const KEY_slash: number;

export const KEY_soliddiamond: number;

export const KEY_space: number;

export const KEY_squareroot: number;

export const KEY_ssharp: number;

export const KEY_sterling: number;

export const KEY_stricteq: number;

export const KEY_t: number;

export const KEY_tabovedot: number;

export const KEY_tcaron: number;

export const KEY_tcedilla: number;

export const KEY_telephone: number;

export const KEY_telephonerecorder: number;

export const KEY_therefore: number;

export const KEY_thinspace: number;

export const KEY_thorn: number;

export const KEY_threeeighths: number;

export const KEY_threefifths: number;

export const KEY_threequarters: number;

export const KEY_threesubscript: number;

export const KEY_threesuperior: number;

export const KEY_tintegral: number;

export const KEY_topintegral: number;

export const KEY_topleftparens: number;

export const KEY_topleftradical: number;

export const KEY_topleftsqbracket: number;

export const KEY_topleftsummation: number;

export const KEY_toprightparens: number;

export const KEY_toprightsqbracket: number;

export const KEY_toprightsummation: number;

export const KEY_topt: number;

export const KEY_topvertsummationconnector: number;

export const KEY_trademark: number;

export const KEY_trademarkincircle: number;

export const KEY_tslash: number;

export const KEY_twofifths: number;

export const KEY_twosubscript: number;

export const KEY_twosuperior: number;

export const KEY_twothirds: number;

export const KEY_u: number;

export const KEY_uacute: number;

export const KEY_ubelowdot: number;

export const KEY_ubreve: number;

export const KEY_ucircumflex: number;

export const KEY_udiaeresis: number;

export const KEY_udoubleacute: number;

export const KEY_ugrave: number;

export const KEY_uhook: number;

export const KEY_uhorn: number;

export const KEY_uhornacute: number;

export const KEY_uhornbelowdot: number;

export const KEY_uhorngrave: number;

export const KEY_uhornhook: number;

export const KEY_uhorntilde: number;

export const KEY_umacron: number;

export const KEY_underbar: number;

export const KEY_underscore: number;

export const KEY_union: number;

export const KEY_uogonek: number;

export const KEY_uparrow: number;

export const KEY_upcaret: number;

export const KEY_upleftcorner: number;

export const KEY_uprightcorner: number;

export const KEY_upshoe: number;

export const KEY_upstile: number;

export const KEY_uptack: number;

export const KEY_uring: number;

export const KEY_utilde: number;

export const KEY_v: number;

export const KEY_variation: number;

export const KEY_vertbar: number;

export const KEY_vertconnector: number;

export const KEY_voicedsound: number;

export const KEY_vt: number;

export const KEY_w: number;

export const KEY_wacute: number;

export const KEY_wcircumflex: number;

export const KEY_wdiaeresis: number;

export const KEY_wgrave: number;

export const KEY_x: number;

export const KEY_xabovedot: number;

export const KEY_y: number;

export const KEY_yacute: number;

export const KEY_ybelowdot: number;

export const KEY_ycircumflex: number;

export const KEY_ydiaeresis: number;

export const KEY_yen: number;

export const KEY_ygrave: number;

export const KEY_yhook: number;

export const KEY_ytilde: number;

export const KEY_z: number;

export const KEY_zabovedot: number;

export const KEY_zacute: number;

export const KEY_zcaron: number;

export const KEY_zerosubscript: number;

export const KEY_zerosuperior: number;

export const KEY_zstroke: number;

export const KP_0: number;

export const KP_1: number;

export const KP_2: number;

export const KP_3: number;

export const KP_4: number;

export const KP_5: number;

export const KP_6: number;

export const KP_7: number;

export const KP_8: number;

export const KP_9: number;

export const KP_Add: number;

export const KP_Begin: number;

export const KP_Decimal: number;

export const KP_Delete: number;

export const KP_Divide: number;

export const KP_Down: number;

export const KP_End: number;

export const KP_Enter: number;

export const KP_Equal: number;

export const KP_F1: number;

export const KP_F2: number;

export const KP_F3: number;

export const KP_F4: number;

export const KP_Home: number;

export const KP_Insert: number;

export const KP_Left: number;

export const KP_Multiply: number;

export const KP_Next: number;

export const KP_Page_Down: number;

export const KP_Page_Up: number;

export const KP_Prior: number;

export const KP_Right: number;

export const KP_Separator: number;

export const KP_Space: number;

export const KP_Subtract: number;

export const KP_Tab: number;

export const KP_Up: number;

export const Kana_Lock: number;

export const Kana_Shift: number;

export const Kanji: number;

export const Kanji_Bangou: number;

export const Katakana: number;

export const KbdBrightnessDown: number;

export const KbdBrightnessUp: number;

export const KbdLightOnOff: number;

export const Kcedilla: number;

export const Korean_Won: number;

export const L: number;

export const L1: number;

export const L10: number;

export const L2: number;

export const L3: number;

export const L4: number;

export const L5: number;

export const L6: number;

export const L7: number;

export const L8: number;

export const L9: number;

export const Lacute: number;

export const Last_Virtual_Screen: number;

export const Launch0: number;

export const Launch1: number;

export const Launch2: number;

export const Launch3: number;

export const Launch4: number;

export const Launch5: number;

export const Launch6: number;

export const Launch7: number;

export const Launch8: number;

export const Launch9: number;

export const LaunchA: number;

export const LaunchB: number;

export const LaunchC: number;

export const LaunchD: number;

export const LaunchE: number;

export const LaunchF: number;

export const Lbelowdot: number;

export const Lcaron: number;

export const Lcedilla: number;

export const Left: number;

export const LightBulb: number;

export const Linefeed: number;

export const LiraSign: number;

export const LogGrabInfo: number;

export const LogOff: number;

export const LogWindowTree: number;

export const Lstroke: number;

export const M: number;

export const MAJOR_VERSION: number;

export const MICRO_VERSION: number;

export const MINOR_VERSION: number;

export const Mabovedot: number;

export const Macedonia_DSE: number;

export const Macedonia_GJE: number;

export const Macedonia_KJE: number;

export const Macedonia_dse: number;

export const Macedonia_gje: number;

export const Macedonia_kje: number;

export const Mae_Koho: number;

export const Mail: number;

export const MailForward: number;

export const Market: number;

export const Massyo: number;

export const Meeting: number;

export const Memo: number;

export const Menu: number;

export const MenuKB: number;

export const MenuPB: number;

export const Messenger: number;

export const Meta_L: number;

export const Meta_R: number;

export const MillSign: number;

export const ModeLock: number;

export const Mode_switch: number;

export const MonBrightnessDown: number;

export const MonBrightnessUp: number;

export const MouseKeys_Accel_Enable: number;

export const MouseKeys_Enable: number;

export const Muhenkan: number;

export const Multi_key: number;

export const MultipleCandidate: number;

export const Music: number;

export const MyComputer: number;

export const MySites: number;

export const N: number;

export const NO_FPU: number;

export const Nacute: number;

export const NairaSign: number;

export const Ncaron: number;

export const Ncedilla: number;

export const New: number;

export const NewSheqelSign: number;

export const News: number;

export const Next: number;

export const Next_VMode: number;

export const Next_Virtual_Screen: number;

export const Ntilde: number;

export const Num_Lock: number;

export const O: number;

export const OE: number;

export const Oacute: number;

export const Obarred: number;

export const Obelowdot: number;

export const Ocaron: number;

export const Ocircumflex: number;

export const Ocircumflexacute: number;

export const Ocircumflexbelowdot: number;

export const Ocircumflexgrave: number;

export const Ocircumflexhook: number;

export const Ocircumflextilde: number;

export const Odiaeresis: number;

export const Odoubleacute: number;

export const OfficeHome: number;

export const Ograve: number;

export const Ohook: number;

export const Ohorn: number;

export const Ohornacute: number;

export const Ohornbelowdot: number;

export const Ohorngrave: number;

export const Ohornhook: number;

export const Ohorntilde: number;

export const Omacron: number;

export const Ooblique: number;

export const Open: number;

export const OpenURL: number;

export const Option: number;

export const Oslash: number;

export const Otilde: number;

export const Overlay1_Enable: number;

export const Overlay2_Enable: number;

export const P: number;

export const PATH_RELATIVE: number;

export const PRIORITY_REDRAW: number;

export const Pabovedot: number;

export const Page_Down: number;

export const Page_Up: number;

export const Paste: number;

export const Pause: number;

export const PesetaSign: number;

export const Phone: number;

export const Pictures: number;

export const Pointer_Accelerate: number;

export const Pointer_Button1: number;

export const Pointer_Button2: number;

export const Pointer_Button3: number;

export const Pointer_Button4: number;

export const Pointer_Button5: number;

export const Pointer_Button_Dflt: number;

export const Pointer_DblClick1: number;

export const Pointer_DblClick2: number;

export const Pointer_DblClick3: number;

export const Pointer_DblClick4: number;

export const Pointer_DblClick5: number;

export const Pointer_DblClick_Dflt: number;

export const Pointer_DfltBtnNext: number;

export const Pointer_DfltBtnPrev: number;

export const Pointer_Down: number;

export const Pointer_DownLeft: number;

export const Pointer_DownRight: number;

export const Pointer_Drag1: number;

export const Pointer_Drag2: number;

export const Pointer_Drag3: number;

export const Pointer_Drag4: number;

export const Pointer_Drag5: number;

export const Pointer_Drag_Dflt: number;

export const Pointer_EnableKeys: number;

export const Pointer_Left: number;

export const Pointer_Right: number;

export const Pointer_Up: number;

export const Pointer_UpLeft: number;

export const Pointer_UpRight: number;

export const PowerDown: number;

export const PowerOff: number;

export const Prev_VMode: number;

export const Prev_Virtual_Screen: number;

export const PreviousCandidate: number;

export const Print: number;

export const Prior: number;

export const Q: number;

export const R: number;

export const R1: number;

export const R10: number;

export const R11: number;

export const R12: number;

export const R13: number;

export const R14: number;

export const R15: number;

export const R2: number;

export const R3: number;

export const R4: number;

export const R5: number;

export const R6: number;

export const R7: number;

export const R8: number;

export const R9: number;

export const Racute: number;

export const Rcaron: number;

export const Rcedilla: number;

export const Red: number;

export const Redo: number;

export const Refresh: number;

export const Reload: number;

export const RepeatKeys_Enable: number;

export const Reply: number;

export const Return: number;

export const Right: number;

export const RockerDown: number;

export const RockerEnter: number;

export const RockerUp: number;

export const Romaji: number;

export const RotateWindows: number;

export const RotationKB: number;

export const RotationPB: number;

export const RupeeSign: number;

export const S: number;

export const SCHWA: number;

export const STAGE_TYPE: string;

export const Sabovedot: number;

export const Sacute: number;

export const Save: number;

export const Scaron: number;

export const Scedilla: number;

export const Scircumflex: number;

export const ScreenSaver: number;

export const ScrollClick: number;

export const ScrollDown: number;

export const ScrollUp: number;

export const Scroll_Lock: number;

export const Search: number;

export const Select: number;

export const SelectButton: number;

export const Send: number;

export const Serbian_DJE: number;

export const Serbian_DZE: number;

export const Serbian_JE: number;

export const Serbian_LJE: number;

export const Serbian_NJE: number;

export const Serbian_TSHE: number;

export const Serbian_dje: number;

export const Serbian_dze: number;

export const Serbian_je: number;

export const Serbian_lje: number;

export const Serbian_nje: number;

export const Serbian_tshe: number;

export const Shift_L: number;

export const Shift_Lock: number;

export const Shift_R: number;

export const Shop: number;

export const SingleCandidate: number;

export const Sinh_a: number;

export const Sinh_aa: number;

export const Sinh_aa2: number;

export const Sinh_ae: number;

export const Sinh_ae2: number;

export const Sinh_aee: number;

export const Sinh_aee2: number;

export const Sinh_ai: number;

export const Sinh_ai2: number;

export const Sinh_al: number;

export const Sinh_au: number;

export const Sinh_au2: number;

export const Sinh_ba: number;

export const Sinh_bha: number;

export const Sinh_ca: number;

export const Sinh_cha: number;

export const Sinh_dda: number;

export const Sinh_ddha: number;

export const Sinh_dha: number;

export const Sinh_dhha: number;

export const Sinh_e: number;

export const Sinh_e2: number;

export const Sinh_ee: number;

export const Sinh_ee2: number;

export const Sinh_fa: number;

export const Sinh_ga: number;

export const Sinh_gha: number;

export const Sinh_h2: number;

export const Sinh_ha: number;

export const Sinh_i: number;

export const Sinh_i2: number;

export const Sinh_ii: number;

export const Sinh_ii2: number;

export const Sinh_ja: number;

export const Sinh_jha: number;

export const Sinh_jnya: number;

export const Sinh_ka: number;

export const Sinh_kha: number;

export const Sinh_kunddaliya: number;

export const Sinh_la: number;

export const Sinh_lla: number;

export const Sinh_lu: number;

export const Sinh_lu2: number;

export const Sinh_luu: number;

export const Sinh_luu2: number;

export const Sinh_ma: number;

export const Sinh_mba: number;

export const Sinh_na: number;

export const Sinh_ndda: number;

export const Sinh_ndha: number;

export const Sinh_ng: number;

export const Sinh_ng2: number;

export const Sinh_nga: number;

export const Sinh_nja: number;

export const Sinh_nna: number;

export const Sinh_nya: number;

export const Sinh_o: number;

export const Sinh_o2: number;

export const Sinh_oo: number;

export const Sinh_oo2: number;

export const Sinh_pa: number;

export const Sinh_pha: number;

export const Sinh_ra: number;

export const Sinh_ri: number;

export const Sinh_rii: number;

export const Sinh_ru2: number;

export const Sinh_ruu2: number;

export const Sinh_sa: number;

export const Sinh_sha: number;

export const Sinh_ssha: number;

export const Sinh_tha: number;

export const Sinh_thha: number;

export const Sinh_tta: number;

export const Sinh_ttha: number;

export const Sinh_u: number;

export const Sinh_u2: number;

export const Sinh_uu: number;

export const Sinh_uu2: number;

export const Sinh_va: number;

export const Sinh_ya: number;

export const Sleep: number;

export const SlowKeys_Enable: number;

export const Spell: number;

export const SplitScreen: number;

export const Standby: number;

export const Start: number;

export const StickyKeys_Enable: number;

export const Stop: number;

export const Subtitle: number;

export const Super_L: number;

export const Super_R: number;

export const Support: number;

export const Suspend: number;

export const Switch_VT_1: number;

export const Switch_VT_10: number;

export const Switch_VT_11: number;

export const Switch_VT_12: number;

export const Switch_VT_2: number;

export const Switch_VT_3: number;

export const Switch_VT_4: number;

export const Switch_VT_5: number;

export const Switch_VT_6: number;

export const Switch_VT_7: number;

export const Switch_VT_8: number;

export const Switch_VT_9: number;

export const Sys_Req: number;

export const T: number;

export const THORN: number;

export const Tab: number;

export const Tabovedot: number;

export const TaskPane: number;

export const Tcaron: number;

export const Tcedilla: number;

export const Terminal: number;

export const Terminate_Server: number;

export const Thai_baht: number;

export const Thai_bobaimai: number;

export const Thai_chochan: number;

export const Thai_chochang: number;

export const Thai_choching: number;

export const Thai_chochoe: number;

export const Thai_dochada: number;

export const Thai_dodek: number;

export const Thai_fofa: number;

export const Thai_fofan: number;

export const Thai_hohip: number;

export const Thai_honokhuk: number;

export const Thai_khokhai: number;

export const Thai_khokhon: number;

export const Thai_khokhuat: number;

export const Thai_khokhwai: number;

export const Thai_khorakhang: number;

export const Thai_kokai: number;

export const Thai_lakkhangyao: number;

export const Thai_lekchet: number;

export const Thai_lekha: number;

export const Thai_lekhok: number;

export const Thai_lekkao: number;

export const Thai_leknung: number;

export const Thai_lekpaet: number;

export const Thai_leksam: number;

export const Thai_leksi: number;

export const Thai_leksong: number;

export const Thai_leksun: number;

export const Thai_lochula: number;

export const Thai_loling: number;

export const Thai_lu: number;

export const Thai_maichattawa: number;

export const Thai_maiek: number;

export const Thai_maihanakat: number;

export const Thai_maihanakat_maitho: number;

export const Thai_maitaikhu: number;

export const Thai_maitho: number;

export const Thai_maitri: number;

export const Thai_maiyamok: number;

export const Thai_moma: number;

export const Thai_ngongu: number;

export const Thai_nikhahit: number;

export const Thai_nonen: number;

export const Thai_nonu: number;

export const Thai_oang: number;

export const Thai_paiyannoi: number;

export const Thai_phinthu: number;

export const Thai_phophan: number;

export const Thai_phophung: number;

export const Thai_phosamphao: number;

export const Thai_popla: number;

export const Thai_rorua: number;

export const Thai_ru: number;

export const Thai_saraa: number;

export const Thai_saraaa: number;

export const Thai_saraae: number;

export const Thai_saraaimaimalai: number;

export const Thai_saraaimaimuan: number;

export const Thai_saraam: number;

export const Thai_sarae: number;

export const Thai_sarai: number;

export const Thai_saraii: number;

export const Thai_sarao: number;

export const Thai_sarau: number;

export const Thai_saraue: number;

export const Thai_sarauee: number;

export const Thai_sarauu: number;

export const Thai_sorusi: number;

export const Thai_sosala: number;

export const Thai_soso: number;

export const Thai_sosua: number;

export const Thai_thanthakhat: number;

export const Thai_thonangmontho: number;

export const Thai_thophuthao: number;

export const Thai_thothahan: number;

export const Thai_thothan: number;

export const Thai_thothong: number;

export const Thai_thothung: number;

export const Thai_topatak: number;

export const Thai_totao: number;

export const Thai_wowaen: number;

export const Thai_yoyak: number;

export const Thai_yoying: number;

export const Thorn: number;

export const Time: number;

export const ToDoList: number;

export const Tools: number;

export const TopMenu: number;

export const TouchpadOff: number;

export const TouchpadOn: number;

export const TouchpadToggle: number;

export const Touroku: number;

export const Travel: number;

export const Tslash: number;

export const U: number;

export const UWB: number;

export const Uacute: number;

export const Ubelowdot: number;

export const Ubreve: number;

export const Ucircumflex: number;

export const Udiaeresis: number;

export const Udoubleacute: number;

export const Ugrave: number;

export const Uhook: number;

export const Uhorn: number;

export const Uhornacute: number;

export const Uhornbelowdot: number;

export const Uhorngrave: number;

export const Uhornhook: number;

export const Uhorntilde: number;

export const Ukrainian_GHE_WITH_UPTURN: number;

export const Ukrainian_I: number;

export const Ukrainian_IE: number;

export const Ukrainian_YI: number;

export const Ukrainian_ghe_with_upturn: number;

export const Ukrainian_i: number;

export const Ukrainian_ie: number;

export const Ukrainian_yi: number;

export const Ukranian_I: number;

export const Ukranian_JE: number;

export const Ukranian_YI: number;

export const Ukranian_i: number;

export const Ukranian_je: number;

export const Ukranian_yi: number;

export const Umacron: number;

export const Undo: number;

export const Ungrab: number;

export const Uogonek: number;

export const Up: number;

export const Uring: number;

export const User1KB: number;

export const User2KB: number;

export const UserPB: number;

export const Utilde: number;

export const V: number;

export const VERSION: number;

export const VERSION_HEX: number;

export const VERSION_S: string;

export const VendorHome: number;

export const Video: number;

export const View: number;

export const VoidSymbol: number;

export const W: number;

export const WINDOWING_EGL: string;

export const WINDOWING_GDK: string;

export const WINDOWING_GLX: string;

export const WINDOWING_WAYLAND: string;

export const WINDOWING_X11: string;

export const WLAN: number;

export const WWW: number;

export const Wacute: number;

export const WakeUp: number;

export const Wcircumflex: number;

export const Wdiaeresis: number;

export const WebCam: number;

export const Wgrave: number;

export const WheelButton: number;

export const WindowClear: number;

export const WonSign: number;

export const Word: number;

export const X: number;

export const Xabovedot: number;

export const Xfer: number;

export const Y: number;

export const Yacute: number;

export const Ybelowdot: number;

export const Ycircumflex: number;

export const Ydiaeresis: number;

export const Yellow: number;

export const Ygrave: number;

export const Yhook: number;

export const Ytilde: number;

export const Z: number;

export const Zabovedot: number;

export const Zacute: number;

export const Zcaron: number;

export const Zen_Koho: number;

export const Zenkaku: number;

export const Zenkaku_Hankaku: number;

export const ZoomIn: number;

export const ZoomOut: number;

export const Zstroke: number;

export const a: number;

export const aacute: number;

export const abelowdot: number;

export const abovedot: number;

export const abreve: number;

export const abreveacute: number;

export const abrevebelowdot: number;

export const abrevegrave: number;

export const abrevehook: number;

export const abrevetilde: number;

export const acircumflex: number;

export const acircumflexacute: number;

export const acircumflexbelowdot: number;

export const acircumflexgrave: number;

export const acircumflexhook: number;

export const acircumflextilde: number;

export const acute: number;

export const adiaeresis: number;

export const ae: number;

export const agrave: number;

export const ahook: number;

export const amacron: number;

export const ampersand: number;

export const aogonek: number;

export const apostrophe: number;

export const approxeq: number;

export const approximate: number;

export const aring: number;

export const asciicircum: number;

export const asciitilde: number;

export const asterisk: number;

export const at: number;

export const atilde: number;

export const b: number;

export const babovedot: number;

export const backslash: number;

export const ballotcross: number;

export const bar: number;

export const because: number;

export const blank: number;

export const botintegral: number;

export const botleftparens: number;

export const botleftsqbracket: number;

export const botleftsummation: number;

export const botrightparens: number;

export const botrightsqbracket: number;

export const botrightsummation: number;

export const bott: number;

export const botvertsummationconnector: number;

export const braceleft: number;

export const braceright: number;

export const bracketleft: number;

export const bracketright: number;

export const braille_blank: number;

export const braille_dot_1: number;

export const braille_dot_10: number;

export const braille_dot_2: number;

export const braille_dot_3: number;

export const braille_dot_4: number;

export const braille_dot_5: number;

export const braille_dot_6: number;

export const braille_dot_7: number;

export const braille_dot_8: number;

export const braille_dot_9: number;

export const braille_dots_1: number;

export const braille_dots_12: number;

export const braille_dots_123: number;

export const braille_dots_1234: number;

export const braille_dots_12345: number;

export const braille_dots_123456: number;

export const braille_dots_1234567: number;

export const braille_dots_12345678: number;

export const braille_dots_1234568: number;

export const braille_dots_123457: number;

export const braille_dots_1234578: number;

export const braille_dots_123458: number;

export const braille_dots_12346: number;

export const braille_dots_123467: number;

export const braille_dots_1234678: number;

export const braille_dots_123468: number;

export const braille_dots_12347: number;

export const braille_dots_123478: number;

export const braille_dots_12348: number;

export const braille_dots_1235: number;

export const braille_dots_12356: number;

export const braille_dots_123567: number;

export const braille_dots_1235678: number;

export const braille_dots_123568: number;

export const braille_dots_12357: number;

export const braille_dots_123578: number;

export const braille_dots_12358: number;

export const braille_dots_1236: number;

export const braille_dots_12367: number;

export const braille_dots_123678: number;

export const braille_dots_12368: number;

export const braille_dots_1237: number;

export const braille_dots_12378: number;

export const braille_dots_1238: number;

export const braille_dots_124: number;

export const braille_dots_1245: number;

export const braille_dots_12456: number;

export const braille_dots_124567: number;

export const braille_dots_1245678: number;

export const braille_dots_124568: number;

export const braille_dots_12457: number;

export const braille_dots_124578: number;

export const braille_dots_12458: number;

export const braille_dots_1246: number;

export const braille_dots_12467: number;

export const braille_dots_124678: number;

export const braille_dots_12468: number;

export const braille_dots_1247: number;

export const braille_dots_12478: number;

export const braille_dots_1248: number;

export const braille_dots_125: number;

export const braille_dots_1256: number;

export const braille_dots_12567: number;

export const braille_dots_125678: number;

export const braille_dots_12568: number;

export const braille_dots_1257: number;

export const braille_dots_12578: number;

export const braille_dots_1258: number;

export const braille_dots_126: number;

export const braille_dots_1267: number;

export const braille_dots_12678: number;

export const braille_dots_1268: number;

export const braille_dots_127: number;

export const braille_dots_1278: number;

export const braille_dots_128: number;

export const braille_dots_13: number;

export const braille_dots_134: number;

export const braille_dots_1345: number;

export const braille_dots_13456: number;

export const braille_dots_134567: number;

export const braille_dots_1345678: number;

export const braille_dots_134568: number;

export const braille_dots_13457: number;

export const braille_dots_134578: number;

export const braille_dots_13458: number;

export const braille_dots_1346: number;

export const braille_dots_13467: number;

export const braille_dots_134678: number;

export const braille_dots_13468: number;

export const braille_dots_1347: number;

export const braille_dots_13478: number;

export const braille_dots_1348: number;

export const braille_dots_135: number;

export const braille_dots_1356: number;

export const braille_dots_13567: number;

export const braille_dots_135678: number;

export const braille_dots_13568: number;

export const braille_dots_1357: number;

export const braille_dots_13578: number;

export const braille_dots_1358: number;

export const braille_dots_136: number;

export const braille_dots_1367: number;

export const braille_dots_13678: number;

export const braille_dots_1368: number;

export const braille_dots_137: number;

export const braille_dots_1378: number;

export const braille_dots_138: number;

export const braille_dots_14: number;

export const braille_dots_145: number;

export const braille_dots_1456: number;

export const braille_dots_14567: number;

export const braille_dots_145678: number;

export const braille_dots_14568: number;

export const braille_dots_1457: number;

export const braille_dots_14578: number;

export const braille_dots_1458: number;

export const braille_dots_146: number;

export const braille_dots_1467: number;

export const braille_dots_14678: number;

export const braille_dots_1468: number;

export const braille_dots_147: number;

export const braille_dots_1478: number;

export const braille_dots_148: number;

export const braille_dots_15: number;

export const braille_dots_156: number;

export const braille_dots_1567: number;

export const braille_dots_15678: number;

export const braille_dots_1568: number;

export const braille_dots_157: number;

export const braille_dots_1578: number;

export const braille_dots_158: number;

export const braille_dots_16: number;

export const braille_dots_167: number;

export const braille_dots_1678: number;

export const braille_dots_168: number;

export const braille_dots_17: number;

export const braille_dots_178: number;

export const braille_dots_18: number;

export const braille_dots_2: number;

export const braille_dots_23: number;

export const braille_dots_234: number;

export const braille_dots_2345: number;

export const braille_dots_23456: number;

export const braille_dots_234567: number;

export const braille_dots_2345678: number;

export const braille_dots_234568: number;

export const braille_dots_23457: number;

export const braille_dots_234578: number;

export const braille_dots_23458: number;

export const braille_dots_2346: number;

export const braille_dots_23467: number;

export const braille_dots_234678: number;

export const braille_dots_23468: number;

export const braille_dots_2347: number;

export const braille_dots_23478: number;

export const braille_dots_2348: number;

export const braille_dots_235: number;

export const braille_dots_2356: number;

export const braille_dots_23567: number;

export const braille_dots_235678: number;

export const braille_dots_23568: number;

export const braille_dots_2357: number;

export const braille_dots_23578: number;

export const braille_dots_2358: number;

export const braille_dots_236: number;

export const braille_dots_2367: number;

export const braille_dots_23678: number;

export const braille_dots_2368: number;

export const braille_dots_237: number;

export const braille_dots_2378: number;

export const braille_dots_238: number;

export const braille_dots_24: number;

export const braille_dots_245: number;

export const braille_dots_2456: number;

export const braille_dots_24567: number;

export const braille_dots_245678: number;

export const braille_dots_24568: number;

export const braille_dots_2457: number;

export const braille_dots_24578: number;

export const braille_dots_2458: number;

export const braille_dots_246: number;

export const braille_dots_2467: number;

export const braille_dots_24678: number;

export const braille_dots_2468: number;

export const braille_dots_247: number;

export const braille_dots_2478: number;

export const braille_dots_248: number;

export const braille_dots_25: number;

export const braille_dots_256: number;

export const braille_dots_2567: number;

export const braille_dots_25678: number;

export const braille_dots_2568: number;

export const braille_dots_257: number;

export const braille_dots_2578: number;

export const braille_dots_258: number;

export const braille_dots_26: number;

export const braille_dots_267: number;

export const braille_dots_2678: number;

export const braille_dots_268: number;

export const braille_dots_27: number;

export const braille_dots_278: number;

export const braille_dots_28: number;

export const braille_dots_3: number;

export const braille_dots_34: number;

export const braille_dots_345: number;

export const braille_dots_3456: number;

export const braille_dots_34567: number;

export const braille_dots_345678: number;

export const braille_dots_34568: number;

export const braille_dots_3457: number;

export const braille_dots_34578: number;

export const braille_dots_3458: number;

export const braille_dots_346: number;

export const braille_dots_3467: number;

export const braille_dots_34678: number;

export const braille_dots_3468: number;

export const braille_dots_347: number;

export const braille_dots_3478: number;

export const braille_dots_348: number;

export const braille_dots_35: number;

export const braille_dots_356: number;

export const braille_dots_3567: number;

export const braille_dots_35678: number;

export const braille_dots_3568: number;

export const braille_dots_357: number;

export const braille_dots_3578: number;

export const braille_dots_358: number;

export const braille_dots_36: number;

export const braille_dots_367: number;

export const braille_dots_3678: number;

export const braille_dots_368: number;

export const braille_dots_37: number;

export const braille_dots_378: number;

export const braille_dots_38: number;

export const braille_dots_4: number;

export const braille_dots_45: number;

export const braille_dots_456: number;

export const braille_dots_4567: number;

export const braille_dots_45678: number;

export const braille_dots_4568: number;

export const braille_dots_457: number;

export const braille_dots_4578: number;

export const braille_dots_458: number;

export const braille_dots_46: number;

export const braille_dots_467: number;

export const braille_dots_4678: number;

export const braille_dots_468: number;

export const braille_dots_47: number;

export const braille_dots_478: number;

export const braille_dots_48: number;

export const braille_dots_5: number;

export const braille_dots_56: number;

export const braille_dots_567: number;

export const braille_dots_5678: number;

export const braille_dots_568: number;

export const braille_dots_57: number;

export const braille_dots_578: number;

export const braille_dots_58: number;

export const braille_dots_6: number;

export const braille_dots_67: number;

export const braille_dots_678: number;

export const braille_dots_68: number;

export const braille_dots_7: number;

export const braille_dots_78: number;

export const braille_dots_8: number;

export const breve: number;

export const brokenbar: number;

export const c: number;

export const c_h: number;

export const cabovedot: number;

export const cacute: number;

export const careof: number;

export const caret: number;

export const caron: number;

export const ccaron: number;

export const ccedilla: number;

export const ccircumflex: number;

export const cedilla: number;

export const cent: number;

export const ch: number;

export const checkerboard: number;

export const checkmark: number;

export const circle: number;

export const club: number;

export const colon: number;

export const comma: number;

export const containsas: number;

export const copyright: number;

export const cr: number;

export const crossinglines: number;

export const cuberoot: number;

export const currency: number;

export const cursor: number;

export const d: number;

export const dabovedot: number;

export const dagger: number;

export const dcaron: number;

export const dead_A: number;

export const dead_E: number;

export const dead_I: number;

export const dead_O: number;

export const dead_U: number;

export const dead_a: number;

export const dead_abovecomma: number;

export const dead_abovedot: number;

export const dead_abovereversedcomma: number;

export const dead_abovering: number;

export const dead_aboveverticalline: number;

export const dead_acute: number;

export const dead_belowbreve: number;

export const dead_belowcircumflex: number;

export const dead_belowcomma: number;

export const dead_belowdiaeresis: number;

export const dead_belowdot: number;

export const dead_belowmacron: number;

export const dead_belowring: number;

export const dead_belowtilde: number;

export const dead_belowverticalline: number;

export const dead_breve: number;

export const dead_capital_schwa: number;

export const dead_caron: number;

export const dead_cedilla: number;

export const dead_circumflex: number;

export const dead_currency: number;

export const dead_dasia: number;

export const dead_diaeresis: number;

export const dead_doubleacute: number;

export const dead_doublegrave: number;

export const dead_e: number;

export const dead_grave: number;

export const dead_greek: number;

export const dead_hook: number;

export const dead_horn: number;

export const dead_i: number;

export const dead_invertedbreve: number;

export const dead_iota: number;

export const dead_longsolidusoverlay: number;

export const dead_lowline: number;

export const dead_macron: number;

export const dead_o: number;

export const dead_ogonek: number;

export const dead_perispomeni: number;

export const dead_psili: number;

export const dead_semivoiced_sound: number;

export const dead_small_schwa: number;

export const dead_stroke: number;

export const dead_tilde: number;

export const dead_u: number;

export const dead_voiced_sound: number;

export const decimalpoint: number;

export const degree: number;

export const diaeresis: number;

export const diamond: number;

export const digitspace: number;

export const dintegral: number;

export const division: number;

export const dollar: number;

export const doubbaselinedot: number;

export const doubleacute: number;

export const doubledagger: number;

export const doublelowquotemark: number;

export const downarrow: number;

export const downcaret: number;

export const downshoe: number;

export const downstile: number;

export const downtack: number;

export const dstroke: number;

export const e: number;

export const eabovedot: number;

export const eacute: number;

export const ebelowdot: number;

export const ecaron: number;

export const ecircumflex: number;

export const ecircumflexacute: number;

export const ecircumflexbelowdot: number;

export const ecircumflexgrave: number;

export const ecircumflexhook: number;

export const ecircumflextilde: number;

export const ediaeresis: number;

export const egrave: number;

export const ehook: number;

export const eightsubscript: number;

export const eightsuperior: number;

export const elementof: number;

export const ellipsis: number;

export const em3space: number;

export const em4space: number;

export const emacron: number;

export const emdash: number;

export const emfilledcircle: number;

export const emfilledrect: number;

export const emopencircle: number;

export const emopenrectangle: number;

export const emptyset: number;

export const emspace: number;

export const endash: number;

export const enfilledcircbullet: number;

export const enfilledsqbullet: number;

export const eng: number;

export const enopencircbullet: number;

export const enopensquarebullet: number;

export const enspace: number;

export const eogonek: number;

export const equal: number;

export const eth: number;

export const etilde: number;

export const exclam: number;

export const exclamdown: number;

export const ezh: number;

export const f: number;

export const fabovedot: number;

export const femalesymbol: number;

export const ff: number;

export const figdash: number;

export const filledlefttribullet: number;

export const filledrectbullet: number;

export const filledrighttribullet: number;

export const filledtribulletdown: number;

export const filledtribulletup: number;

export const fiveeighths: number;

export const fivesixths: number;

export const fivesubscript: number;

export const fivesuperior: number;

export const fourfifths: number;

export const foursubscript: number;

export const foursuperior: number;

export const fourthroot: number;

export const __function: number;

export const g: number;

export const gabovedot: number;

export const gbreve: number;

export const gcaron: number;

export const gcedilla: number;

export const gcircumflex: number;

export const grave: number;

export const greater: number;

export const greaterthanequal: number;

export const guillemotleft: number;

export const guillemotright: number;

export const h: number;

export const hairspace: number;

export const hcircumflex: number;

export const heart: number;

export const hebrew_aleph: number;

export const hebrew_ayin: number;

export const hebrew_bet: number;

export const hebrew_beth: number;

export const hebrew_chet: number;

export const hebrew_dalet: number;

export const hebrew_daleth: number;

export const hebrew_doublelowline: number;

export const hebrew_finalkaph: number;

export const hebrew_finalmem: number;

export const hebrew_finalnun: number;

export const hebrew_finalpe: number;

export const hebrew_finalzade: number;

export const hebrew_finalzadi: number;

export const hebrew_gimel: number;

export const hebrew_gimmel: number;

export const hebrew_he: number;

export const hebrew_het: number;

export const hebrew_kaph: number;

export const hebrew_kuf: number;

export const hebrew_lamed: number;

export const hebrew_mem: number;

export const hebrew_nun: number;

export const hebrew_pe: number;

export const hebrew_qoph: number;

export const hebrew_resh: number;

export const hebrew_samech: number;

export const hebrew_samekh: number;

export const hebrew_shin: number;

export const hebrew_taf: number;

export const hebrew_taw: number;

export const hebrew_tet: number;

export const hebrew_teth: number;

export const hebrew_waw: number;

export const hebrew_yod: number;

export const hebrew_zade: number;

export const hebrew_zadi: number;

export const hebrew_zain: number;

export const hebrew_zayin: number;

export const hexagram: number;

export const horizconnector: number;

export const horizlinescan1: number;

export const horizlinescan3: number;

export const horizlinescan5: number;

export const horizlinescan7: number;

export const horizlinescan9: number;

export const hstroke: number;

export const ht: number;

export const hyphen: number;

export const i: number;

export const iTouch: number;

export const iacute: number;

export const ibelowdot: number;

export const ibreve: number;

export const icircumflex: number;

export const identical: number;

export const idiaeresis: number;

export const idotless: number;

export const ifonlyif: number;

export const igrave: number;

export const ihook: number;

export const imacron: number;

export const implies: number;

export const includedin: number;

export const includes: number;

export const infinity: number;

export const integral: number;

export const intersection: number;

export const iogonek: number;

export const itilde: number;

export const j: number;

export const jcircumflex: number;

export const jot: number;

export const k: number;

export const kana_A: number;

export const kana_CHI: number;

export const kana_E: number;

export const kana_FU: number;

export const kana_HA: number;

export const kana_HE: number;

export const kana_HI: number;

export const kana_HO: number;

export const kana_HU: number;

export const kana_I: number;

export const kana_KA: number;

export const kana_KE: number;

export const kana_KI: number;

export const kana_KO: number;

export const kana_KU: number;

export const kana_MA: number;

export const kana_ME: number;

export const kana_MI: number;

export const kana_MO: number;

export const kana_MU: number;

export const kana_N: number;

export const kana_NA: number;

export const kana_NE: number;

export const kana_NI: number;

export const kana_NO: number;

export const kana_NU: number;

export const kana_O: number;

export const kana_RA: number;

export const kana_RE: number;

export const kana_RI: number;

export const kana_RO: number;

export const kana_RU: number;

export const kana_SA: number;

export const kana_SE: number;

export const kana_SHI: number;

export const kana_SO: number;

export const kana_SU: number;

export const kana_TA: number;

export const kana_TE: number;

export const kana_TI: number;

export const kana_TO: number;

export const kana_TSU: number;

export const kana_TU: number;

export const kana_U: number;

export const kana_WA: number;

export const kana_WO: number;

export const kana_YA: number;

export const kana_YO: number;

export const kana_YU: number;

export const kana_a: number;

export const kana_closingbracket: number;

export const kana_comma: number;

export const kana_conjunctive: number;

export const kana_e: number;

export const kana_fullstop: number;

export const kana_i: number;

export const kana_middledot: number;

export const kana_o: number;

export const kana_openingbracket: number;

export const kana_switch: number;

export const kana_tsu: number;

export const kana_tu: number;

export const kana_u: number;

export const kana_ya: number;

export const kana_yo: number;

export const kana_yu: number;

export const kappa: number;

export const kcedilla: number;

export const kra: number;

export const l: number;

export const lacute: number;

export const latincross: number;

export const lbelowdot: number;

export const lcaron: number;

export const lcedilla: number;

export const leftanglebracket: number;

export const leftarrow: number;

export const leftcaret: number;

export const leftdoublequotemark: number;

export const leftmiddlecurlybrace: number;

export const leftopentriangle: number;

export const leftpointer: number;

export const leftradical: number;

export const leftshoe: number;

export const leftsinglequotemark: number;

export const leftt: number;

export const lefttack: number;

export const less: number;

export const lessthanequal: number;

export const lf: number;

export const logicaland: number;

export const logicalor: number;

export const lowleftcorner: number;

export const lowrightcorner: number;

export const lstroke: number;

export const m: number;

export const mabovedot: number;

export const macron: number;

export const malesymbol: number;

export const maltesecross: number;

export const marker: number;

export const masculine: number;

export const minus: number;

export const minutes: number;

export const mu: number;

export const multiply: number;

export const musicalflat: number;

export const musicalsharp: number;

export const n: number;

export const nabla: number;

export const nacute: number;

export const ncaron: number;

export const ncedilla: number;

export const ninesubscript: number;

export const ninesuperior: number;

export const nl: number;

export const nobreakspace: number;

export const notapproxeq: number;

export const notelementof: number;

export const notequal: number;

export const notidentical: number;

export const notsign: number;

export const ntilde: number;

export const numbersign: number;

export const numerosign: number;

export const o: number;

export const oacute: number;

export const obarred: number;

export const obelowdot: number;

export const ocaron: number;

export const ocircumflex: number;

export const ocircumflexacute: number;

export const ocircumflexbelowdot: number;

export const ocircumflexgrave: number;

export const ocircumflexhook: number;

export const ocircumflextilde: number;

export const odiaeresis: number;

export const odoubleacute: number;

export const oe: number;

export const ogonek: number;

export const ograve: number;

export const ohook: number;

export const ohorn: number;

export const ohornacute: number;

export const ohornbelowdot: number;

export const ohorngrave: number;

export const ohornhook: number;

export const ohorntilde: number;

export const omacron: number;

export const oneeighth: number;

export const onefifth: number;

export const onehalf: number;

export const onequarter: number;

export const onesixth: number;

export const onesubscript: number;

export const onesuperior: number;

export const onethird: number;

export const ooblique: number;

export const openrectbullet: number;

export const openstar: number;

export const opentribulletdown: number;

export const opentribulletup: number;

export const ordfeminine: number;

export const oslash: number;

export const otilde: number;

export const overbar: number;

export const overline: number;

export const p: number;

export const pabovedot: number;

export const paragraph: number;

export const parenleft: number;

export const parenright: number;

export const partdifferential: number;

export const partialderivative: number;

export const percent: number;

export const period: number;

export const periodcentered: number;

export const permille: number;

export const phonographcopyright: number;

export const plus: number;

export const plusminus: number;

export const prescription: number;

export const prolongedsound: number;

export const punctspace: number;

export const q: number;

export const quad: number;

export const question: number;

export const questiondown: number;

export const quotedbl: number;

export const quoteleft: number;

export const quoteright: number;

export const r: number;

export const racute: number;

export const radical: number;

export const rcaron: number;

export const rcedilla: number;

export const registered: number;

export const rightanglebracket: number;

export const rightarrow: number;

export const rightcaret: number;

export const rightdoublequotemark: number;

export const rightmiddlecurlybrace: number;

export const rightmiddlesummation: number;

export const rightopentriangle: number;

export const rightpointer: number;

export const rightshoe: number;

export const rightsinglequotemark: number;

export const rightt: number;

export const righttack: number;

export const s: number;

export const sabovedot: number;

export const sacute: number;

export const scaron: number;

export const scedilla: number;

export const schwa: number;

export const scircumflex: number;

export const script_switch: number;

export const seconds: number;

export const section: number;

export const semicolon: number;

export const semivoicedsound: number;

export const seveneighths: number;

export const sevensubscript: number;

export const sevensuperior: number;

export const signaturemark: number;

export const signifblank: number;

export const similarequal: number;

export const singlelowquotemark: number;

export const sixsubscript: number;

export const sixsuperior: number;

export const slash: number;

export const soliddiamond: number;

export const space: number;

export const squareroot: number;

export const ssharp: number;

export const sterling: number;

export const stricteq: number;

export const t: number;

export const tabovedot: number;

export const tcaron: number;

export const tcedilla: number;

export const telephone: number;

export const telephonerecorder: number;

export const therefore: number;

export const thinspace: number;

export const thorn: number;

export const threeeighths: number;

export const threefifths: number;

export const threequarters: number;

export const threesubscript: number;

export const threesuperior: number;

export const tintegral: number;

export const topintegral: number;

export const topleftparens: number;

export const topleftradical: number;

export const topleftsqbracket: number;

export const topleftsummation: number;

export const toprightparens: number;

export const toprightsqbracket: number;

export const toprightsummation: number;

export const topt: number;

export const topvertsummationconnector: number;

export const trademark: number;

export const trademarkincircle: number;

export const tslash: number;

export const twofifths: number;

export const twosubscript: number;

export const twosuperior: number;

export const twothirds: number;

export const u: number;

export const uacute: number;

export const ubelowdot: number;

export const ubreve: number;

export const ucircumflex: number;

export const udiaeresis: number;

export const udoubleacute: number;

export const ugrave: number;

export const uhook: number;

export const uhorn: number;

export const uhornacute: number;

export const uhornbelowdot: number;

export const uhorngrave: number;

export const uhornhook: number;

export const uhorntilde: number;

export const umacron: number;

export const underbar: number;

export const underscore: number;

export const union: number;

export const uogonek: number;

export const uparrow: number;

export const upcaret: number;

export const upleftcorner: number;

export const uprightcorner: number;

export const upshoe: number;

export const upstile: number;

export const uptack: number;

export const uring: number;

export const utilde: number;

export const v: number;

export const variation: number;

export const vertbar: number;

export const vertconnector: number;

export const voicedsound: number;

export const vt: number;

export const w: number;

export const wacute: number;

export const wcircumflex: number;

export const wdiaeresis: number;

export const wgrave: number;

export const x: number;

export const xabovedot: number;

export const y: number;

export const yacute: number;

export const ybelowdot: number;

export const ycircumflex: number;

export const ydiaeresis: number;

export const yen: number;

export const ygrave: number;

export const yhook: number;

export const ytilde: number;

export const z: number;

export const zabovedot: number;

export const zacute: number;

export const zcaron: number;

export const zerosubscript: number;

export const zerosuperior: number;

export const zstroke: number;

export function actor_box_alloc(): ActorBox;

export function base_init(): void;

export function cairo_clear(cr: cairo.Context): void;

export function cairo_set_source_color(cr: cairo.Context, color: Color): void;

export function check_version(major: number, minor: number, micro: number): boolean;

export function check_windowing_backend(backend_type: string): boolean;

export function clear_glyph_cache(): void;

export function color_from_hls(hue: number, luminance: number, saturation: number): Color;

export function color_from_pixel(pixel: number): Color;

export function color_from_string(str: string): [boolean, Color];

export function color_get_static(color: StaticColor): Color;

export function container_class_find_child_property(klass: GObject.Object, property_name: string): GObject.ParamSpec;

export function container_class_list_child_properties(klass: GObject.Object): GObject.ParamSpec[];

export function disable_accessibility(): void;

export function do_event(event: Event): void;

export function event_add_filter(stage: Stage | null, func: EventFilterFunc, notify: GLib.DestroyNotify): number;

export function event_get(): Event;

export function event_peek(): Event;

export function event_remove_filter(id: number): void;

export function events_pending(): boolean;

export function feature_available(feature: FeatureFlags): boolean;

export function feature_get_all(): FeatureFlags;

export function frame_source_add(priority: number, fps: number, func: GLib.SourceFunc, notify: GLib.DestroyNotify): number;

export function get_accessibility_enabled(): boolean;

export function get_actor_by_gid(id_: number): Actor;

export function get_current_event(): Event;

export function get_current_event_time(): number;

export function get_debug_enabled(): boolean;

export function get_default_backend(): Backend;

export function get_default_frame_rate(): number;

export function get_default_text_direction(): TextDirection;

export function get_font_flags(): FontFlags;

export function get_font_map(): Pango.FontMap;

export function get_input_device_for_id(id_: number): InputDevice;

export function get_keyboard_grab(): Actor;

export function get_motion_events_enabled(): boolean;

export function get_pointer_grab(): Actor;

export function get_script_id(gobject: GObject.Object): string;

export function get_show_fps(): boolean;

export function get_timestamp(): number;

export function grab_keyboard(actor: Actor): void;

export function grab_pointer(actor: Actor): void;

export function grab_pointer_for_device(actor: Actor, id_: number): void;

export function image_error_quark(): GLib.Quark;

export function init(argv: string[] | null): [InitError, string[] | null];

export function init_error_quark(): GLib.Quark;

export function init_with_args(argv: string[] | null, parameter_string: string | null, entries: GLib.OptionEntry[] | null, translation_domain: string | null): [InitError, string[] | null];

export function keysym_to_unicode(keyval: number): number;

export function main(): void;

export function main_level(): number;

export function main_quit(): void;

export function matrix_alloc(): Matrix;

export function point_zero(): Point;

export function rect_zero(): Rect;

export function redraw(stage: Stage): void;

export function script_error_quark(): GLib.Quark;

export function set_default_frame_rate(frames_per_sec: number): void;

export function set_font_flags(flags: FontFlags): void;

export function set_motion_events_enabled(enable: boolean): void;

export function set_windowing_backend(backend_type: string): void;

export function shader_error_quark(): GLib.Quark;

export function test_add_data_full(test_path: string, test_func: GLib.TestDataFunc, test_notify: GLib.DestroyNotify): void;

export function test_check_actor_at_point(stage: Actor, point: Point, actor: Actor): [boolean, Actor | null];

export function test_check_color_at_point(stage: Actor, point: Point, color: Color): [boolean, Color];

export function test_get_stage(): Actor;

export function test_init(argc: number, argv: string): void;

export function test_run(): number;

export function texture_error_quark(): GLib.Quark;

export function threads_add_frame_source(priority: number, fps: number, func: GLib.SourceFunc, notify: GLib.DestroyNotify): number;

export function threads_add_idle(priority: number, func: GLib.SourceFunc, notify: GLib.DestroyNotify): number;

export function threads_add_repaint_func(func: GLib.SourceFunc, notify: GLib.DestroyNotify): number;

export function threads_add_repaint_func_full(flags: RepaintFlags, func: GLib.SourceFunc, notify: GLib.DestroyNotify): number;

export function threads_add_timeout(priority: number, interval: number, func: GLib.SourceFunc, notify: GLib.DestroyNotify): number;

export function threads_enter(): void;

export function threads_init(): void;

export function threads_leave(): void;

export function threads_remove_repaint_func(handle_id: number): void;

export function ungrab_keyboard(): void;

export function ungrab_pointer(): void;

export function ungrab_pointer_for_device(id_: number): void;

export function unicode_to_keysym(wc: number): number;

export function units_from_cm(cm: number): Units;

export function units_from_em(em: number): Units;

export function units_from_em_for_font(font_name: string | null, em: number): Units;

export function units_from_mm(mm: number): Units;

export function units_from_pixels(px: number): Units;

export function units_from_pt(pt: number): Units;

export function units_from_string(str: string): [boolean, Units];

export function util_next_p2(a: number): number;

export function value_dup_paint_node(value: (GObject.Value | string | boolean | number)): PaintNode;

export function value_get_color(value: (GObject.Value | string | boolean | number)): Color;

export function value_get_paint_node(value: (GObject.Value | string | boolean | number)): PaintNode;

export function value_get_shader_float(value: (GObject.Value | string | boolean | number)): number[];

export function value_get_shader_int(value: (GObject.Value | string | boolean | number)): number[];

export function value_get_shader_matrix(value: (GObject.Value | string | boolean | number)): number[];

export function value_get_units(value: (GObject.Value | string | boolean | number)): Units;

export function value_set_color(value: (GObject.Value | string | boolean | number), color: Color): void;

export function value_set_paint_node(value: (GObject.Value | string | boolean | number), node: PaintNode | null): void;

export function value_set_shader_float(value: (GObject.Value | string | boolean | number), floats: number[]): void;

export function value_set_shader_int(value: (GObject.Value | string | boolean | number), ints: number[]): void;

export function value_set_shader_matrix(value: (GObject.Value | string | boolean | number), matrix: number[]): void;

export function value_set_units(value: (GObject.Value | string | boolean | number), units: Units): void;

export function value_take_paint_node(value: (GObject.Value | string | boolean | number), node: PaintNode | null): void;

export type ActorCreateChildFunc = (item: GObject.Object) => Actor;

export type AlphaFunc = (alpha: Alpha) => number;

export type BehaviourForeachFunc = (behaviour: Behaviour, actor: Actor) => void;

export type BindingActionFunc = (gobject: GObject.Object, action_name: string, key_val: number, modifiers: ModifierType) => boolean;

export type Callback = (actor: Actor) => void;

export type EventFilterFunc = (event: Event) => boolean;

export type ModelFilterFunc = (model: Model, iter: ModelIter) => boolean;

export type ModelForeachFunc = (model: Model, iter: ModelIter) => boolean;

export type ModelSortFunc = (model: Model, a: (GObject.Value | string | boolean | number), b: (GObject.Value | string | boolean | number)) => number;

export type PathCallback = (node: PathNode) => void;

export type ProgressFunc = (a: (GObject.Value | string | boolean | number), b: (GObject.Value | string | boolean | number), progress: number, retval: (GObject.Value | string | boolean | number)) => boolean;

export type ScriptConnectFunc = (script: Script, object: GObject.Object, signal_name: string, handler_name: string, connect_object: GObject.Object, flags: GObject.ConnectFlags) => void;

export type TimelineProgressFunc = (timeline: Timeline, elapsed: number, total: number) => number;
export enum ActorAlign {
    FILL = 0,
    START = 1,
    CENTER = 2,
    END = 3,
}
export enum AlignAxis {
    X_AXIS = 0,
    Y_AXIS = 1,
    BOTH = 2,
}
export enum AnimationMode {
    CUSTOM_MODE = 0,
    LINEAR = 1,
    EASE_IN_QUAD = 2,
    EASE_OUT_QUAD = 3,
    EASE_IN_OUT_QUAD = 4,
    EASE_IN_CUBIC = 5,
    EASE_OUT_CUBIC = 6,
    EASE_IN_OUT_CUBIC = 7,
    EASE_IN_QUART = 8,
    EASE_OUT_QUART = 9,
    EASE_IN_OUT_QUART = 10,
    EASE_IN_QUINT = 11,
    EASE_OUT_QUINT = 12,
    EASE_IN_OUT_QUINT = 13,
    EASE_IN_SINE = 14,
    EASE_OUT_SINE = 15,
    EASE_IN_OUT_SINE = 16,
    EASE_IN_EXPO = 17,
    EASE_OUT_EXPO = 18,
    EASE_IN_OUT_EXPO = 19,
    EASE_IN_CIRC = 20,
    EASE_OUT_CIRC = 21,
    EASE_IN_OUT_CIRC = 22,
    EASE_IN_ELASTIC = 23,
    EASE_OUT_ELASTIC = 24,
    EASE_IN_OUT_ELASTIC = 25,
    EASE_IN_BACK = 26,
    EASE_OUT_BACK = 27,
    EASE_IN_OUT_BACK = 28,
    EASE_IN_BOUNCE = 29,
    EASE_OUT_BOUNCE = 30,
    EASE_IN_OUT_BOUNCE = 31,
    STEPS = 32,
    STEP_START = 33,
    STEP_END = 34,
    CUBIC_BEZIER = 35,
    EASE = 36,
    EASE_IN = 37,
    EASE_OUT = 38,
    EASE_IN_OUT = 39,
    ANIMATION_LAST = 40,
}
export enum BinAlignment {
    FIXED = 0,
    FILL = 1,
    START = 2,
    END = 3,
    CENTER = 4,
}
export enum BindCoordinate {
    X = 0,
    Y = 1,
    WIDTH = 2,
    HEIGHT = 3,
    POSITION = 4,
    SIZE = 5,
    ALL = 6,
}
export enum BoxAlignment {
    START = 0,
    END = 1,
    CENTER = 2,
}
export enum ContentGravity {
    TOP_LEFT = 0,
    TOP = 1,
    TOP_RIGHT = 2,
    LEFT = 3,
    CENTER = 4,
    RIGHT = 5,
    BOTTOM_LEFT = 6,
    BOTTOM = 7,
    BOTTOM_RIGHT = 8,
    RESIZE_FILL = 9,
    RESIZE_ASPECT = 10,
}
export enum DragAxis {
    AXIS_NONE = 0,
    X_AXIS = 1,
    Y_AXIS = 2,
}
export enum EventType {
    NOTHING = 0,
    KEY_PRESS = 1,
    KEY_RELEASE = 2,
    MOTION = 3,
    ENTER = 4,
    LEAVE = 5,
    BUTTON_PRESS = 6,
    BUTTON_RELEASE = 7,
    SCROLL = 8,
    STAGE_STATE = 9,
    DESTROY_NOTIFY = 10,
    CLIENT_MESSAGE = 11,
    DELETE = 12,
    TOUCH_BEGIN = 13,
    TOUCH_UPDATE = 14,
    TOUCH_END = 15,
    TOUCH_CANCEL = 16,
    TOUCHPAD_PINCH = 17,
    TOUCHPAD_SWIPE = 18,
    EVENT_LAST = 19,
}
export enum FlowOrientation {
    HORIZONTAL = 0,
    VERTICAL = 1,
}
export enum GestureTriggerEdge {
    NONE = 0,
    AFTER = 1,
    BEFORE = 2,
}
export enum Gravity {
    NONE = 0,
    NORTH = 1,
    NORTH_EAST = 2,
    EAST = 3,
    SOUTH_EAST = 4,
    SOUTH = 5,
    SOUTH_WEST = 6,
    WEST = 7,
    NORTH_WEST = 8,
    CENTER = 9,
}
export enum GridPosition {
    LEFT = 0,
    RIGHT = 1,
    TOP = 2,
    BOTTOM = 3,
}
export class ImageError extends GLib.Error {
    constructor(copy: ImageError);
    // Properties
    static DATA: number;
    // Members
    quark(): GLib.Quark;
}
export class InitError extends GLib.Error {
    constructor(copy: InitError);
    // Properties
    static SUCCESS: number;
    static ERROR_UNKNOWN: number;
    static ERROR_THREADS: number;
    static ERROR_BACKEND: number;
    static ERROR_INTERNAL: number;
    // Members
    quark(): GLib.Quark;
}
export enum InputAxis {
    IGNORE = 0,
    X = 1,
    Y = 2,
    PRESSURE = 3,
    XTILT = 4,
    YTILT = 5,
    WHEEL = 6,
    DISTANCE = 7,
    LAST = 8,
}
export enum InputDeviceType {
    POINTER_DEVICE = 0,
    KEYBOARD_DEVICE = 1,
    EXTENSION_DEVICE = 2,
    JOYSTICK_DEVICE = 3,
    TABLET_DEVICE = 4,
    TOUCHPAD_DEVICE = 5,
    TOUCHSCREEN_DEVICE = 6,
    PEN_DEVICE = 7,
    ERASER_DEVICE = 8,
    CURSOR_DEVICE = 9,
    N_DEVICE_TYPES = 10,
}
export enum InputMode {
    MASTER = 0,
    SLAVE = 1,
    FLOATING = 2,
}
export enum Interpolation {
    LINEAR = 0,
    CUBIC = 1,
}
export enum LongPressState {
    QUERY = 0,
    ACTIVATE = 1,
    CANCEL = 2,
}
export enum Orientation {
    HORIZONTAL = 0,
    VERTICAL = 1,
}
export enum PanAxis {
    AXIS_NONE = 0,
    X_AXIS = 1,
    Y_AXIS = 2,
    AXIS_AUTO = 3,
}
export enum PathNodeType {
    MOVE_TO = 0,
    LINE_TO = 1,
    CURVE_TO = 2,
    CLOSE = 3,
    REL_MOVE_TO = 32,
    REL_LINE_TO = 33,
    REL_CURVE_TO = 34,
}
export enum PickMode {
    NONE = 0,
    REACTIVE = 1,
    ALL = 2,
}
export enum RequestMode {
    HEIGHT_FOR_WIDTH = 0,
    WIDTH_FOR_HEIGHT = 1,
    CONTENT_SIZE = 2,
}
export enum RotateAxis {
    X_AXIS = 0,
    Y_AXIS = 1,
    Z_AXIS = 2,
}
export enum RotateDirection {
    CW = 0,
    CCW = 1,
}
export enum ScalingFilter {
    LINEAR = 0,
    NEAREST = 1,
    TRILINEAR = 2,
}
export class ScriptError extends GLib.Error {
    constructor(copy: ScriptError);
    // Properties
    static TYPE_FUNCTION: number;
    static PROPERTY: number;
    static VALUE: number;
    // Members
    quark(): GLib.Quark;
}
export enum ScrollDirection {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
    SMOOTH = 4,
}
export enum ScrollSource {
    UNKNOWN = 0,
    WHEEL = 1,
    FINGER = 2,
    CONTINUOUS = 3,
}
export class ShaderError extends GLib.Error {
    constructor(copy: ShaderError);
    // Properties
    static NO_ASM: number;
    static NO_GLSL: number;
    static COMPILE: number;
    // Members
    quark(): GLib.Quark;
}
export enum ShaderType {
    VERTEX_SHADER = 0,
    FRAGMENT_SHADER = 1,
}
export enum SnapEdge {
    TOP = 0,
    RIGHT = 1,
    BOTTOM = 2,
    LEFT = 3,
}
export enum StaticColor {
    WHITE = 0,
    BLACK = 1,
    RED = 2,
    DARK_RED = 3,
    GREEN = 4,
    DARK_GREEN = 5,
    BLUE = 6,
    DARK_BLUE = 7,
    CYAN = 8,
    DARK_CYAN = 9,
    MAGENTA = 10,
    DARK_MAGENTA = 11,
    YELLOW = 12,
    DARK_YELLOW = 13,
    GRAY = 14,
    DARK_GRAY = 15,
    LIGHT_GRAY = 16,
    BUTTER = 17,
    BUTTER_LIGHT = 18,
    BUTTER_DARK = 19,
    ORANGE = 20,
    ORANGE_LIGHT = 21,
    ORANGE_DARK = 22,
    CHOCOLATE = 23,
    CHOCOLATE_LIGHT = 24,
    CHOCOLATE_DARK = 25,
    CHAMELEON = 26,
    CHAMELEON_LIGHT = 27,
    CHAMELEON_DARK = 28,
    SKY_BLUE = 29,
    SKY_BLUE_LIGHT = 30,
    SKY_BLUE_DARK = 31,
    PLUM = 32,
    PLUM_LIGHT = 33,
    PLUM_DARK = 34,
    SCARLET_RED = 35,
    SCARLET_RED_LIGHT = 36,
    SCARLET_RED_DARK = 37,
    ALUMINIUM_1 = 38,
    ALUMINIUM_2 = 39,
    ALUMINIUM_3 = 40,
    ALUMINIUM_4 = 41,
    ALUMINIUM_5 = 42,
    ALUMINIUM_6 = 43,
    TRANSPARENT = 44,
}
export enum StepMode {
    START = 0,
    END = 1,
}
export enum TableAlignment {
    START = 0,
    CENTER = 1,
    END = 2,
}
export enum TextDirection {
    DEFAULT = 0,
    LTR = 1,
    RTL = 2,
}
export class TextureError extends GLib.Error {
    constructor(copy: TextureError);
    // Properties
    static OUT_OF_MEMORY: number;
    static NO_YUV: number;
    static BAD_FORMAT: number;
    // Members
    quark(): GLib.Quark;
}
export enum TextureQuality {
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
}
export enum TimelineDirection {
    FORWARD = 0,
    BACKWARD = 1,
}
export enum TouchpadGesturePhase {
    BEGIN = 0,
    UPDATE = 1,
    END = 2,
    CANCEL = 3,
}
export enum UnitType {
    PIXEL = 0,
    EM = 1,
    MM = 2,
    POINT = 3,
    CM = 4,
}
export enum ZoomAxis {
    X_AXIS = 0,
    Y_AXIS = 1,
    BOTH = 2,
}
export enum ActorFlags {
    MAPPED = 2,
    REALIZED = 4,
    REACTIVE = 8,
    VISIBLE = 16,
    NO_LAYOUT = 32,
}
export enum AllocationFlags {
    ALLOCATION_NONE = 0,
    ABSOLUTE_ORIGIN_CHANGED = 2,
    DELEGATE_LAYOUT = 4,
}
export enum ContentRepeat {
    NONE = 0,
    X_AXIS = 1,
    Y_AXIS = 2,
    BOTH = 3,
}
export enum EffectPaintFlags {
    ACTOR_DIRTY = 1,
}
export enum EventFlags {
    NONE = 0,
    FLAG_SYNTHETIC = 1,
}
export enum FeatureFlags {
    TEXTURE_NPOT = 4,
    SYNC_TO_VBLANK = 8,
    TEXTURE_YUV = 16,
    TEXTURE_READ_PIXELS = 32,
    STAGE_STATIC = 64,
    STAGE_USER_RESIZE = 128,
    STAGE_CURSOR = 256,
    SHADERS_GLSL = 512,
    OFFSCREEN = 1024,
    STAGE_MULTIPLE = 2048,
    SWAP_EVENTS = 4096,
}
export enum FontFlags {
    MIPMAPPING = 1,
    HINTING = 2,
}
export enum ModifierType {
    SHIFT_MASK = 1,
    LOCK_MASK = 2,
    CONTROL_MASK = 4,
    MOD1_MASK = 8,
    MOD2_MASK = 16,
    MOD3_MASK = 32,
    MOD4_MASK = 64,
    MOD5_MASK = 128,
    BUTTON1_MASK = 256,
    BUTTON2_MASK = 512,
    BUTTON3_MASK = 1024,
    BUTTON4_MASK = 2048,
    BUTTON5_MASK = 4096,
    MODIFIER_RESERVED_13_MASK = 8192,
    MODIFIER_RESERVED_14_MASK = 16384,
    MODIFIER_RESERVED_15_MASK = 32768,
    MODIFIER_RESERVED_16_MASK = 65536,
    MODIFIER_RESERVED_17_MASK = 131072,
    MODIFIER_RESERVED_18_MASK = 262144,
    MODIFIER_RESERVED_19_MASK = 524288,
    MODIFIER_RESERVED_20_MASK = 1048576,
    MODIFIER_RESERVED_21_MASK = 2097152,
    MODIFIER_RESERVED_22_MASK = 4194304,
    MODIFIER_RESERVED_23_MASK = 8388608,
    MODIFIER_RESERVED_24_MASK = 16777216,
    MODIFIER_RESERVED_25_MASK = 33554432,
    SUPER_MASK = 67108864,
    HYPER_MASK = 134217728,
    META_MASK = 268435456,
    MODIFIER_RESERVED_29_MASK = 536870912,
    RELEASE_MASK = 1073741824,
    MODIFIER_MASK = 1543512063,
}
export enum OffscreenRedirect {
    AUTOMATIC_FOR_OPACITY = 1,
    ALWAYS = 2,
}
export enum RepaintFlags {
    PRE_PAINT = 1,
    POST_PAINT = 2,
    QUEUE_REDRAW_ON_ADD = 4,
}
export enum ScrollFinishFlags {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
}
export enum ScrollMode {
    NONE = 0,
    HORIZONTALLY = 1,
    VERTICALLY = 2,
    BOTH = 3,
}
export enum StageState {
    FULLSCREEN = 2,
    OFFSCREEN = 4,
    ACTIVATED = 8,
}
export enum SwipeDirection {
    UP = 1,
    DOWN = 2,
    LEFT = 4,
    RIGHT = 8,
}
export enum TextureFlags {
    NONE = 0,
    RGB_FLAG_BGR = 2,
    RGB_FLAG_PREMULT = 4,
    YUV_FLAG_YUV2 = 8,
}
export module Action {
    export interface ConstructorProperties extends ActorMeta.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Action extends ActorMeta {
    constructor(properties?: Partial<Action.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Action.ConstructorProperties>, ...args: any[]): void;
}
export module Actor {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        actions: Action;
        allocation: ActorBox;
        anchor_gravity: Gravity;
        anchor_x: number;
        anchor_y: number;
        background_color: Color;
        background_color_set: boolean;
        child_transform: Matrix;
        child_transform_set: boolean;
        clip: Geometry;
        clip_rect: Rect;
        clip_to_allocation: boolean;
        constraints: Constraint;
        content: Content;
        content_box: ActorBox;
        content_gravity: ContentGravity;
        content_repeat: ContentRepeat;
        depth: number;
        effect: Effect;
        first_child: Actor;
        fixed_position_set: boolean;
        fixed_x: number;
        fixed_y: number;
        has_clip: boolean;
        has_pointer: boolean;
        height: number;
        last_child: Actor;
        layout_manager: LayoutManager;
        magnification_filter: ScalingFilter;
        mapped: boolean;
        margin_bottom: number;
        margin_left: number;
        margin_right: number;
        margin_top: number;
        min_height: number;
        min_height_set: boolean;
        min_width: number;
        min_width_set: boolean;
        minification_filter: ScalingFilter;
        name: string;
        natural_height: number;
        natural_height_set: boolean;
        natural_width: number;
        natural_width_set: boolean;
        offscreen_redirect: OffscreenRedirect;
        opacity: number;
        pivot_point: Point;
        pivot_point_z: number;
        position: Point;
        reactive: boolean;
        realized: boolean;
        request_mode: RequestMode;
        rotation_angle_x: number;
        rotation_angle_y: number;
        rotation_angle_z: number;
        rotation_center_x: Vertex;
        rotation_center_y: Vertex;
        rotation_center_z: Vertex;
        rotation_center_z_gravity: Gravity;
        scale_center_x: number;
        scale_center_y: number;
        scale_gravity: Gravity;
        scale_x: number;
        scale_y: number;
        scale_z: number;
        show_on_set_parent: boolean;
        size: Size;
        text_direction: TextDirection;
        transform: Matrix;
        transform_set: boolean;
        translation_x: number;
        translation_y: number;
        translation_z: number;
        visible: boolean;
        width: number;
        x: number;
        x_align: ActorAlign;
        x_expand: boolean;
        y: number;
        y_align: ActorAlign;
        y_expand: boolean;
        z_position: number;
    }
}
export class Actor extends GObject.InitiallyUnowned implements Atk.ImplementorIface, Animatable, Container, Scriptable {
    constructor(properties?: Partial<Actor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Actor.ConstructorProperties>, ...args: any[]): void;
    // Properties
    actions: Action;
    allocation: ActorBox;
    anchor_gravity: Gravity;
    anchor_x: number;
    anchor_y: number;
    background_color: Color;
    background_color_set: boolean;
    child_transform: Matrix;
    child_transform_set: boolean;
    clip: Geometry;
    clip_rect: Rect;
    clip_to_allocation: boolean;
    constraints: Constraint;
    content: Content;
    content_box: ActorBox;
    content_gravity: ContentGravity;
    content_repeat: ContentRepeat;
    depth: number;
    effect: Effect;
    first_child: Actor;
    fixed_position_set: boolean;
    fixed_x: number;
    fixed_y: number;
    has_clip: boolean;
    has_pointer: boolean;
    height: number;
    last_child: Actor;
    layout_manager: LayoutManager;
    magnification_filter: ScalingFilter;
    mapped: boolean;
    margin_bottom: number;
    margin_left: number;
    margin_right: number;
    margin_top: number;
    min_height: number;
    min_height_set: boolean;
    min_width: number;
    min_width_set: boolean;
    minification_filter: ScalingFilter;
    name: string;
    natural_height: number;
    natural_height_set: boolean;
    natural_width: number;
    natural_width_set: boolean;
    offscreen_redirect: OffscreenRedirect;
    opacity: number;
    pivot_point: Point;
    pivot_point_z: number;
    position: Point;
    reactive: boolean;
    realized: boolean;
    request_mode: RequestMode;
    rotation_angle_x: number;
    rotation_angle_y: number;
    rotation_angle_z: number;
    rotation_center_x: Vertex;
    rotation_center_y: Vertex;
    rotation_center_z: Vertex;
    rotation_center_z_gravity: Gravity;
    scale_center_x: number;
    scale_center_y: number;
    scale_gravity: Gravity;
    scale_x: number;
    scale_y: number;
    scale_z: number;
    show_on_set_parent: boolean;
    size: Size;
    text_direction: TextDirection;
    transform: Matrix;
    transform_set: boolean;
    translation_x: number;
    translation_y: number;
    translation_z: number;
    visible: boolean;
    width: number;
    x: number;
    x_align: ActorAlign;
    x_expand: boolean;
    y: number;
    y_align: ActorAlign;
    y_expand: boolean;
    z_position: number;
    // Fields
    flags: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'allocation-changed', callback: (_source: this, box: ActorBox, flags: AllocationFlags) => void): number;
    connect_after(signal: 'allocation-changed', callback: (_source: this, box: ActorBox, flags: AllocationFlags) => void): number;
    emit(signal: 'allocation-changed', box: ActorBox, flags: AllocationFlags): void;
    connect(signal: 'button-press-event', callback: (_source: this, event: ButtonEvent) => boolean): number;
    connect_after(signal: 'button-press-event', callback: (_source: this, event: ButtonEvent) => boolean): number;
    emit(signal: 'button-press-event', event: ButtonEvent): void;
    connect(signal: 'button-release-event', callback: (_source: this, event: ButtonEvent) => boolean): number;
    connect_after(signal: 'button-release-event', callback: (_source: this, event: ButtonEvent) => boolean): number;
    emit(signal: 'button-release-event', event: ButtonEvent): void;
    connect(signal: 'captured-event', callback: (_source: this, event: Event) => boolean): number;
    connect_after(signal: 'captured-event', callback: (_source: this, event: Event) => boolean): number;
    emit(signal: 'captured-event', event: Event): void;
    connect(signal: 'destroy', callback: (_source: this) => void): number;
    connect_after(signal: 'destroy', callback: (_source: this) => void): number;
    emit(signal: 'destroy'): void;
    connect(signal: 'enter-event', callback: (_source: this, event: CrossingEvent) => boolean): number;
    connect_after(signal: 'enter-event', callback: (_source: this, event: CrossingEvent) => boolean): number;
    emit(signal: 'enter-event', event: CrossingEvent): void;
    connect(signal: 'event', callback: (_source: this, event: Event) => boolean): number;
    connect_after(signal: 'event', callback: (_source: this, event: Event) => boolean): number;
    emit(signal: 'event', event: Event): void;
    connect(signal: 'hide', callback: (_source: this) => void): number;
    connect_after(signal: 'hide', callback: (_source: this) => void): number;
    emit(signal: 'hide'): void;
    connect(signal: 'key-focus-in', callback: (_source: this) => void): number;
    connect_after(signal: 'key-focus-in', callback: (_source: this) => void): number;
    emit(signal: 'key-focus-in'): void;
    connect(signal: 'key-focus-out', callback: (_source: this) => void): number;
    connect_after(signal: 'key-focus-out', callback: (_source: this) => void): number;
    emit(signal: 'key-focus-out'): void;
    connect(signal: 'key-press-event', callback: (_source: this, event: KeyEvent) => boolean): number;
    connect_after(signal: 'key-press-event', callback: (_source: this, event: KeyEvent) => boolean): number;
    emit(signal: 'key-press-event', event: KeyEvent): void;
    connect(signal: 'key-release-event', callback: (_source: this, event: KeyEvent) => boolean): number;
    connect_after(signal: 'key-release-event', callback: (_source: this, event: KeyEvent) => boolean): number;
    emit(signal: 'key-release-event', event: KeyEvent): void;
    connect(signal: 'leave-event', callback: (_source: this, event: CrossingEvent) => boolean): number;
    connect_after(signal: 'leave-event', callback: (_source: this, event: CrossingEvent) => boolean): number;
    emit(signal: 'leave-event', event: CrossingEvent): void;
    connect(signal: 'motion-event', callback: (_source: this, event: MotionEvent) => boolean): number;
    connect_after(signal: 'motion-event', callback: (_source: this, event: MotionEvent) => boolean): number;
    emit(signal: 'motion-event', event: MotionEvent): void;
    connect(signal: 'paint', callback: (_source: this) => void): number;
    connect_after(signal: 'paint', callback: (_source: this) => void): number;
    emit(signal: 'paint'): void;
    connect(signal: 'parent-set', callback: (_source: this, old_parent: Actor | null) => void): number;
    connect_after(signal: 'parent-set', callback: (_source: this, old_parent: Actor | null) => void): number;
    emit(signal: 'parent-set', old_parent: Actor | null): void;
    connect(signal: 'pick', callback: (_source: this, color: Color) => void): number;
    connect_after(signal: 'pick', callback: (_source: this, color: Color) => void): number;
    emit(signal: 'pick', color: Color): void;
    connect(signal: 'queue-redraw', callback: (_source: this, origin: Actor) => void): number;
    connect_after(signal: 'queue-redraw', callback: (_source: this, origin: Actor) => void): number;
    emit(signal: 'queue-redraw', origin: Actor): void;
    connect(signal: 'queue-relayout', callback: (_source: this) => void): number;
    connect_after(signal: 'queue-relayout', callback: (_source: this) => void): number;
    emit(signal: 'queue-relayout'): void;
    connect(signal: 'realize', callback: (_source: this) => void): number;
    connect_after(signal: 'realize', callback: (_source: this) => void): number;
    emit(signal: 'realize'): void;
    connect(signal: 'scroll-event', callback: (_source: this, event: ScrollEvent) => boolean): number;
    connect_after(signal: 'scroll-event', callback: (_source: this, event: ScrollEvent) => boolean): number;
    emit(signal: 'scroll-event', event: ScrollEvent): void;
    connect(signal: 'show', callback: (_source: this) => void): number;
    connect_after(signal: 'show', callback: (_source: this) => void): number;
    emit(signal: 'show'): void;
    connect(signal: 'touch-event', callback: (_source: this, event: Event) => boolean): number;
    connect_after(signal: 'touch-event', callback: (_source: this, event: Event) => boolean): number;
    emit(signal: 'touch-event', event: Event): void;
    connect(signal: 'transition-stopped', callback: (_source: this, name: string, is_finished: boolean) => void): number;
    connect_after(signal: 'transition-stopped', callback: (_source: this, name: string, is_finished: boolean) => void): number;
    emit(signal: 'transition-stopped', name: string, is_finished: boolean): void;
    connect(signal: 'transitions-completed', callback: (_source: this) => void): number;
    connect_after(signal: 'transitions-completed', callback: (_source: this) => void): number;
    emit(signal: 'transitions-completed'): void;
    connect(signal: 'unrealize', callback: (_source: this) => void): number;
    connect_after(signal: 'unrealize', callback: (_source: this) => void): number;
    emit(signal: 'unrealize'): void;
    // Constructors
    static ["new"](): Actor;
    // Members
    add_action(action: Action): void;
    add_action_with_name(name: string, action: Action): void;
    add_child(child: Actor): void;
    add_constraint(constraint: Constraint): void;
    add_constraint_with_name(name: string, constraint: Constraint): void;
    add_effect(effect: Effect): void;
    add_effect_with_name(name: string, effect: Effect): void;
    add_transition(name: string, transition: Transition): void;
    allocate(box: ActorBox, flags: AllocationFlags): void;
    allocate_align_fill(box: ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean, flags: AllocationFlags): void;
    allocate_available_size(x: number, y: number, available_width: number, available_height: number, flags: AllocationFlags): void;
    allocate_preferred_size(flags: AllocationFlags): void;
    animate_with_alphav(alpha: Alpha, properties: string[], values: (GObject.Value | string | boolean | number)[]): Animation;
    animate_with_timelinev(mode: number, timeline: Timeline, properties: string[], values: (GObject.Value | string | boolean | number)[]): Animation;
    animatev(mode: number, duration: number, properties: string[], values: (GObject.Value | string | boolean | number)[]): Animation;
    apply_relative_transform_to_point(ancestor: Actor | null, point: Vertex): Vertex;
    apply_transform_to_point(point: Vertex): Vertex;
    bind_model(model: Gio.ListModel | null, create_child_func: ActorCreateChildFunc, notify: GLib.DestroyNotify): void;
    clear_actions(): void;
    clear_constraints(): void;
    clear_effects(): void;
    contains(descendant: Actor): boolean;
    continue_paint(): void;
    create_pango_context(): Pango.Context;
    create_pango_layout(text: string | null): Pango.Layout;
    destroy(): void;
    destroy_all_children(): void;
    detach_animation(): void;
    event(event: Event, capture: boolean): boolean;
    get_abs_allocation_vertices(): Vertex[];
    get_accessible(): Atk.Object;
    get_action(name: string): Action;
    get_actions(): GLib.List;
    get_allocation_box(): ActorBox;
    get_allocation_geometry(): Geometry;
    get_allocation_vertices(ancestor: Actor | null): Vertex[];
    get_anchor_point(): [number, number];
    get_anchor_point_gravity(): Gravity;
    get_animation(): Animation;
    get_background_color(): Color;
    get_child_at_index(index_: number): Actor;
    get_child_transform(): Matrix;
    get_children(): GLib.List;
    get_clip(): [number | null, number | null, number | null, number | null];
    get_clip_to_allocation(): boolean;
    get_constraint(name: string): Constraint;
    get_constraints(): GLib.List;
    get_content(): Content;
    get_content_box(): ActorBox;
    get_content_gravity(): ContentGravity;
    get_content_repeat(): ContentRepeat;
    get_content_scaling_filters(): [ScalingFilter | null, ScalingFilter | null];
    get_default_paint_volume(): PaintVolume;
    get_depth(): number;
    get_easing_delay(): number;
    get_easing_duration(): number;
    get_easing_mode(): AnimationMode;
    get_effect(name: string): Effect;
    get_effects(): GLib.List;
    get_first_child(): Actor;
    get_fixed_position_set(): boolean;
    get_flags(): ActorFlags;
    get_geometry(): Geometry;
    get_gid(): number;
    get_height(): number;
    get_last_child(): Actor;
    get_layout_manager(): LayoutManager;
    get_margin(): Margin;
    get_margin_bottom(): number;
    get_margin_left(): number;
    get_margin_right(): number;
    get_margin_top(): number;
    get_n_children(): number;
    get_name(): string;
    get_next_sibling(): Actor;
    get_offscreen_redirect(): OffscreenRedirect;
    get_opacity(): number;
    get_paint_box(): [boolean, ActorBox];
    get_paint_opacity(): number;
    get_paint_visibility(): boolean;
    get_paint_volume(): PaintVolume;
    get_pango_context(): Pango.Context;
    get_parent(): Actor;
    get_pivot_point(): [number | null, number | null];
    get_pivot_point_z(): number;
    get_position(): [number | null, number | null];
    get_preferred_height(for_width: number): [number | null, number | null];
    get_preferred_size(): [number | null, number | null, number | null, number | null];
    get_preferred_width(for_height: number): [number | null, number | null];
    get_previous_sibling(): Actor;
    get_reactive(): boolean;
    get_request_mode(): RequestMode;
    get_rotation(axis: RotateAxis): [number, number, number, number];
    get_rotation_angle(axis: RotateAxis): number;
    get_scale(): [number | null, number | null];
    get_scale_center(): [number | null, number | null];
    get_scale_gravity(): Gravity;
    get_scale_z(): number;
    get_shader(): Shader;
    get_size(): [number | null, number | null];
    get_stage(): Stage;
    get_text_direction(): TextDirection;
    get_transform(): Matrix;
    get_transformation_matrix(): Matrix;
    get_transformed_paint_volume(relative_to_ancestor: Actor): PaintVolume;
    get_transformed_position(): [number | null, number | null];
    get_transformed_size(): [number | null, number | null];
    get_transition(name: string): Transition;
    get_translation(): [number | null, number | null, number | null];
    get_width(): number;
    get_x(): number;
    get_x_align(): ActorAlign;
    get_x_expand(): boolean;
    get_y(): number;
    get_y_align(): ActorAlign;
    get_y_expand(): boolean;
    get_z_position(): number;
    get_z_rotation_gravity(): Gravity;
    grab_key_focus(): void;
    has_actions(): boolean;
    has_allocation(): boolean;
    has_constraints(): boolean;
    has_effects(): boolean;
    has_key_focus(): boolean;
    has_overlaps(): boolean;
    hide(): void;
    hide_all(): void;
    insert_child_above(child: Actor, sibling: Actor | null): void;
    insert_child_at_index(child: Actor, index_: number): void;
    insert_child_below(child: Actor, sibling: Actor | null): void;
    is_in_clone_paint(): boolean;
    is_mapped(): boolean;
    is_realized(): boolean;
    is_rotated(): boolean;
    is_scaled(): boolean;
    is_visible(): boolean;
    lower(above: Actor | null): void;
    lower_bottom(): void;
    map(): void;
    move_anchor_point(anchor_x: number, anchor_y: number): void;
    move_anchor_point_from_gravity(gravity: Gravity): void;
    move_by(dx: number, dy: number): void;
    needs_expand(orientation: Orientation): boolean;
    paint(): void;
    pop_internal(): void;
    push_internal(): void;
    queue_redraw(): void;
    queue_redraw_with_clip(clip: cairo.RectangleInt | null): void;
    queue_relayout(): void;
    raise(below: Actor | null): void;
    raise_top(): void;
    realize(): void;
    remove_action(action: Action): void;
    remove_action_by_name(name: string): void;
    remove_all_children(): void;
    remove_all_transitions(): void;
    remove_child(child: Actor): void;
    remove_clip(): void;
    remove_constraint(constraint: Constraint): void;
    remove_constraint_by_name(name: string): void;
    remove_effect(effect: Effect): void;
    remove_effect_by_name(name: string): void;
    remove_transition(name: string): void;
    reparent(new_parent: Actor): void;
    replace_child(old_child: Actor, new_child: Actor): void;
    restore_easing_state(): void;
    save_easing_state(): void;
    set_allocation(box: ActorBox, flags: AllocationFlags): void;
    set_anchor_point(anchor_x: number, anchor_y: number): void;
    set_anchor_point_from_gravity(gravity: Gravity): void;
    set_background_color(color: Color | null): void;
    set_child_above_sibling(child: Actor, sibling: Actor | null): void;
    set_child_at_index(child: Actor, index_: number): void;
    set_child_below_sibling(child: Actor, sibling: Actor | null): void;
    set_child_transform(transform: Matrix | null): void;
    set_clip(xoff: number, yoff: number, width: number, height: number): void;
    set_clip_to_allocation(clip_set: boolean): void;
    set_content(content: Content | null): void;
    set_content_gravity(gravity: ContentGravity): void;
    set_content_repeat(repeat: ContentRepeat): void;
    set_content_scaling_filters(min_filter: ScalingFilter, mag_filter: ScalingFilter): void;
    set_depth(depth: number): void;
    set_easing_delay(msecs: number): void;
    set_easing_duration(msecs: number): void;
    set_easing_mode(mode: AnimationMode): void;
    set_fixed_position_set(is_set: boolean): void;
    set_flags(flags: ActorFlags): void;
    set_geometry(geometry: Geometry): void;
    set_height(height: number): void;
    set_layout_manager(manager: LayoutManager | null): void;
    set_margin(margin: Margin): void;
    set_margin_bottom(margin: number): void;
    set_margin_left(margin: number): void;
    set_margin_right(margin: number): void;
    set_margin_top(margin: number): void;
    set_name(name: string): void;
    set_offscreen_redirect(redirect: OffscreenRedirect): void;
    set_opacity(opacity: number): void;
    set_parent(parent: Actor): void;
    set_pivot_point(pivot_x: number, pivot_y: number): void;
    set_pivot_point_z(pivot_z: number): void;
    set_position(x: number, y: number): void;
    set_reactive(reactive: boolean): void;
    set_request_mode(mode: RequestMode): void;
    set_rotation(axis: RotateAxis, angle: number, x: number, y: number, z: number): void;
    set_rotation_angle(axis: RotateAxis, angle: number): void;
    set_scale(scale_x: number, scale_y: number): void;
    set_scale_full(scale_x: number, scale_y: number, center_x: number, center_y: number): void;
    set_scale_with_gravity(scale_x: number, scale_y: number, gravity: Gravity): void;
    set_scale_z(scale_z: number): void;
    set_shader(shader: Shader | null): boolean;
    set_shader_param(param: string, value: (GObject.Value | string | boolean | number)): void;
    set_shader_param_float(param: string, value: number): void;
    set_shader_param_int(param: string, value: number): void;
    set_size(width: number, height: number): void;
    set_text_direction(text_dir: TextDirection): void;
    set_transform(transform: Matrix | null): void;
    set_translation(translate_x: number, translate_y: number, translate_z: number): void;
    set_width(width: number): void;
    set_x(x: number): void;
    set_x_align(x_align: ActorAlign): void;
    set_x_expand(expand: boolean): void;
    set_y(y: number): void;
    set_y_align(y_align: ActorAlign): void;
    set_y_expand(expand: boolean): void;
    set_z_position(z_position: number): void;
    set_z_rotation_from_gravity(angle: number, gravity: Gravity): void;
    should_pick_paint(): boolean;
    show(): void;
    show_all(): void;
    transform_stage_point(x: number, y: number): [boolean, number, number];
    unmap(): void;
    unparent(): void;
    unrealize(): void;
    unset_flags(flags: ActorFlags): void;
    vfunc_allocate(box: ActorBox, flags: AllocationFlags): void;
    vfunc_apply_transform(matrix: Matrix): void;
    vfunc_button_press_event(event: ButtonEvent): boolean;
    vfunc_button_release_event(event: ButtonEvent): boolean;
    vfunc_captured_event(event: Event): boolean;
    vfunc_destroy(): void;
    vfunc_enter_event(event: CrossingEvent): boolean;
    vfunc_event(event: Event): boolean;
    vfunc_get_accessible(): Atk.Object;
    vfunc_get_paint_volume(volume: PaintVolume): boolean;
    vfunc_get_preferred_height(for_width: number): [number | null, number | null];
    vfunc_get_preferred_width(for_height: number): [number | null, number | null];
    vfunc_has_overlaps(): boolean;
    vfunc_hide(): void;
    vfunc_hide_all(): void;
    vfunc_key_focus_in(): void;
    vfunc_key_focus_out(): void;
    vfunc_key_press_event(event: KeyEvent): boolean;
    vfunc_key_release_event(event: KeyEvent): boolean;
    vfunc_leave_event(event: CrossingEvent): boolean;
    vfunc_map(): void;
    vfunc_motion_event(event: MotionEvent): boolean;
    vfunc_paint(): void;
    vfunc_paint_node(root: PaintNode): void;
    vfunc_parent_set(old_parent: Actor): void;
    vfunc_pick(color: Color): void;
    vfunc_queue_redraw(leaf_that_queued: Actor): void;
    vfunc_queue_relayout(): void;
    vfunc_realize(): void;
    vfunc_scroll_event(event: ScrollEvent): boolean;
    vfunc_show(): void;
    vfunc_show_all(): void;
    vfunc_touch_event(event: TouchEvent): boolean;
    vfunc_unmap(): void;
    vfunc_unrealize(): void;
    // Implemented Members
    animate_property(animation: Animation, property_name: string, initial_value: (GObject.Value | string | boolean | number), final_value: (GObject.Value | string | boolean | number), progress: number, value: (GObject.Value | string | boolean | number)): boolean;
    find_property(property_name: string): GObject.ParamSpec;
    get_initial_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, GObject.Value];
    set_final_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_animate_property(animation: Animation, property_name: string, initial_value: (GObject.Value | string | boolean | number), final_value: (GObject.Value | string | boolean | number), progress: number, value: (GObject.Value | string | boolean | number)): boolean;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_initial_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, GObject.Value];
    vfunc_set_final_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    add_actor(actor: Actor): void;
    child_get_property(child: Actor, property: string, value: (GObject.Value | string | boolean | number)): void;
    child_notify(child: Actor, pspec: GObject.ParamSpec): void;
    child_set_property(child: Actor, property: string, value: (GObject.Value | string | boolean | number)): void;
    create_child_meta(actor: Actor): void;
    destroy_child_meta(actor: Actor): void;
    find_child_by_name(child_name: string): Actor;
    foreach(callback: Callback): void;
    foreach_with_internals(callback: Callback): void;
    get_child_meta(actor: Actor): ChildMeta;
    lower_child(actor: Actor, sibling: Actor | null): void;
    raise_child(actor: Actor, sibling: Actor | null): void;
    remove_actor(actor: Actor): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: Actor): void;
    vfunc_actor_removed(actor: Actor): void;
    vfunc_add(actor: Actor): void;
    vfunc_child_notify(child: Actor, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: Actor): void;
    vfunc_destroy_child_meta(actor: Actor): void;
    vfunc_foreach(callback: Callback): void;
    vfunc_foreach_with_internals(callback: Callback): void;
    vfunc_get_child_meta(actor: Actor): ChildMeta;
    vfunc_lower(actor: Actor, sibling: Actor | null): void;
    vfunc_raise(actor: Actor, sibling: Actor | null): void;
    vfunc_remove(actor: Actor): void;
    vfunc_sort_depth_order(): void;
    get_id(): string;
    parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_id(id_: string): void;
}
export module ActorMeta {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        actor: Actor;
        enabled: boolean;
        name: string;
    }
}
export abstract class ActorMeta extends GObject.InitiallyUnowned {
    constructor(properties?: Partial<ActorMeta.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ActorMeta.ConstructorProperties>, ...args: any[]): void;
    // Properties
    actor: Actor;
    enabled: boolean;
    name: string;
    // Members
    get_actor(): Actor;
    get_enabled(): boolean;
    get_name(): string;
    set_enabled(is_enabled: boolean): void;
    set_name(name: string): void;
    vfunc_set_actor(actor: Actor | null): void;
}
export module AlignConstraint {
    export interface ConstructorProperties extends Constraint.ConstructorProperties {
        [key: string]: any;
        align_axis: AlignAxis;
        factor: number;
        source: Actor;
    }
}
export class AlignConstraint extends Constraint {
    constructor(properties?: Partial<AlignConstraint.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AlignConstraint.ConstructorProperties>, ...args: any[]): void;
    // Properties
    align_axis: AlignAxis;
    factor: number;
    source: Actor;
    // Constructors
    static ["new"](source: Actor | null, axis: AlignAxis, factor: number): AlignConstraint;
    // Members
    get_align_axis(): AlignAxis;
    get_factor(): number;
    get_source(): Actor;
    set_align_axis(axis: AlignAxis): void;
    set_factor(factor: number): void;
    set_source(source: Actor | null): void;
}
export module Alpha {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        alpha: number;
        mode: number;
        timeline: Timeline;
    }
}
export class Alpha extends GObject.InitiallyUnowned implements Scriptable {
    constructor(properties?: Partial<Alpha.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Alpha.ConstructorProperties>, ...args: any[]): void;
    // Properties
    alpha: number;
    mode: number;
    timeline: Timeline;
    // Constructors
    static ["new"](): Alpha;
    static new_full(timeline: Timeline, mode: number): Alpha;
    static new_with_func(timeline: Timeline, func: AlphaFunc, destroy: GLib.DestroyNotify): Alpha;
    // Members
    get_alpha(): number;
    get_mode(): number;
    get_timeline(): Timeline;
    set_closure(closure: GObject.Closure): void;
    set_func(func: AlphaFunc, destroy: GLib.DestroyNotify): void;
    set_mode(mode: number): void;
    set_timeline(timeline: Timeline): void;
    static register_func(closure: GObject.Closure): number;
    // Implemented Members
    get_id(): string;
    parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_id(id_: string): void;
}
export module Animation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        alpha: Alpha;
        duration: number;
        loop: boolean;
        mode: number;
        object: GObject.Object;
        timeline: Timeline;
    }
}
export class Animation extends GObject.Object implements Scriptable {
    constructor(properties?: Partial<Animation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Animation.ConstructorProperties>, ...args: any[]): void;
    // Properties
    alpha: Alpha;
    duration: number;
    loop: boolean;
    mode: number;
    object: GObject.Object;
    timeline: Timeline;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'completed', callback: (_source: this) => void): number;
    connect_after(signal: 'completed', callback: (_source: this) => void): number;
    emit(signal: 'completed'): void;
    connect(signal: 'started', callback: (_source: this) => void): number;
    connect_after(signal: 'started', callback: (_source: this) => void): number;
    emit(signal: 'started'): void;
    // Constructors
    static ["new"](): Animation;
    // Members
    bind(property_name: string, _final: (GObject.Value | string | boolean | number)): Animation;
    bind_interval(property_name: string, interval: Interval): Animation;
    completed(): void;
    get_alpha(): Alpha;
    get_duration(): number;
    get_interval(property_name: string): Interval;
    get_loop(): boolean;
    get_mode(): number;
    get_object<T = GObject.Object>(): T;
    get_timeline(): Timeline;
    has_property(property_name: string): boolean;
    set_alpha(alpha: Alpha): void;
    set_duration(msecs: number): void;
    set_loop(loop: boolean): void;
    set_mode(mode: number): void;
    set_object(object: GObject.Object): void;
    set_timeline(timeline: Timeline | null): void;
    unbind_property(property_name: string): void;
    update(property_name: string, _final: (GObject.Value | string | boolean | number)): Animation;
    update_interval(property_name: string, interval: Interval): void;
    vfunc_completed(): void;
    vfunc_started(): void;
    // Implemented Members
    get_id(): string;
    parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_id(id_: string): void;
}
export module Animator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        duration: number;
        timeline: Timeline;
    }
}
export class Animator extends GObject.Object implements Scriptable {
    constructor(properties?: Partial<Animator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Animator.ConstructorProperties>, ...args: any[]): void;
    // Properties
    duration: number;
    timeline: Timeline;
    // Constructors
    static ["new"](): Animator;
    // Members
    compute_value(object: GObject.Object, property_name: string, progress: number, value: (GObject.Value | string | boolean | number)): boolean;
    get_duration(): number;
    get_keys(object: GObject.Object | null, property_name: string | null, progress: number): GLib.List;
    get_timeline(): Timeline;
    property_get_ease_in(object: GObject.Object, property_name: string): boolean;
    property_get_interpolation(object: GObject.Object, property_name: string): Interpolation;
    property_set_ease_in(object: GObject.Object, property_name: string, ease_in: boolean): void;
    property_set_interpolation(object: GObject.Object, property_name: string, interpolation: Interpolation): void;
    remove_key(object: GObject.Object | null, property_name: string | null, progress: number): void;
    set_duration(duration: number): void;
    set_key(object: GObject.Object, property_name: string, mode: number, progress: number, value: (GObject.Value | string | boolean | number)): Animator;
    set_timeline(timeline: Timeline): void;
    start(): Timeline;
    // Implemented Members
    get_id(): string;
    parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_id(id_: string): void;
}
export module Backend {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Backend extends GObject.Object {
    constructor(properties?: Partial<Backend.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Backend.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'font-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'font-changed', callback: (_source: this) => void): number;
    emit(signal: 'font-changed'): void;
    connect(signal: 'resolution-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'resolution-changed', callback: (_source: this) => void): number;
    emit(signal: 'resolution-changed'): void;
    connect(signal: 'settings-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'settings-changed', callback: (_source: this) => void): number;
    emit(signal: 'settings-changed'): void;
    // Members
    get_double_click_distance(): number;
    get_double_click_time(): number;
    get_font_name(): string;
    get_font_options(): cairo.FontOptions;
    get_resolution(): number;
    set_double_click_distance(distance: number): void;
    set_double_click_time(msec: number): void;
    set_font_name(font_name: string): void;
    set_font_options(options: cairo.FontOptions): void;
    set_resolution(dpi: number): void;
}
export module Behaviour {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        alpha: Alpha;
    }
}
export abstract class Behaviour extends GObject.Object implements Scriptable {
    constructor(properties?: Partial<Behaviour.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Behaviour.ConstructorProperties>, ...args: any[]): void;
    // Properties
    alpha: Alpha;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'applied', callback: (_source: this, actor: Actor) => void): number;
    connect_after(signal: 'applied', callback: (_source: this, actor: Actor) => void): number;
    emit(signal: 'applied', actor: Actor): void;
    connect(signal: 'removed', callback: (_source: this, actor: Actor) => void): number;
    connect_after(signal: 'removed', callback: (_source: this, actor: Actor) => void): number;
    emit(signal: 'removed', actor: Actor): void;
    // Members
    actors_foreach(func: BehaviourForeachFunc): void;
    apply(actor: Actor): void;
    get_actors(): GLib.SList;
    get_alpha(): Alpha;
    get_n_actors(): number;
    get_nth_actor(index_: number): Actor;
    is_applied(actor: Actor): boolean;
    remove(actor: Actor): void;
    remove_all(): void;
    set_alpha(alpha: Alpha): void;
    vfunc_alpha_notify(alpha_value: number): void;
    vfunc_applied(actor: Actor): void;
    vfunc_removed(actor: Actor): void;
    // Implemented Members
    get_id(): string;
    parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_id(id_: string): void;
}
export module BehaviourDepth {
    export interface ConstructorProperties extends Behaviour.ConstructorProperties {
        [key: string]: any;
        depth_end: number;
        depth_start: number;
    }
}
export class BehaviourDepth extends Behaviour implements Scriptable {
    constructor(properties?: Partial<BehaviourDepth.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BehaviourDepth.ConstructorProperties>, ...args: any[]): void;
    // Properties
    depth_end: number;
    depth_start: number;
    // Constructors
    static ["new"](alpha: Alpha | null, depth_start: number, depth_end: number): BehaviourDepth;
    // Members
    get_bounds(): [number, number];
    set_bounds(depth_start: number, depth_end: number): void;
}
export module BehaviourEllipse {
    export interface ConstructorProperties extends Behaviour.ConstructorProperties {
        [key: string]: any;
        angle_end: number;
        angle_start: number;
        angle_tilt_x: number;
        angle_tilt_y: number;
        angle_tilt_z: number;
        center: Knot;
        direction: RotateDirection;
        height: number;
        width: number;
    }
}
export class BehaviourEllipse extends Behaviour implements Scriptable {
    constructor(properties?: Partial<BehaviourEllipse.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BehaviourEllipse.ConstructorProperties>, ...args: any[]): void;
    // Properties
    angle_end: number;
    angle_start: number;
    angle_tilt_x: number;
    angle_tilt_y: number;
    angle_tilt_z: number;
    center: Knot;
    direction: RotateDirection;
    height: number;
    width: number;
    // Constructors
    static ["new"](alpha: Alpha | null, x: number, y: number, width: number, height: number, direction: RotateDirection, start: number, end: number): BehaviourEllipse;
    // Members
    get_angle_end(): number;
    get_angle_start(): number;
    get_angle_tilt(axis: RotateAxis): number;
    get_center(): [number, number];
    get_direction(): RotateDirection;
    get_height(): number;
    get_tilt(): [number, number, number];
    get_width(): number;
    set_angle_end(angle_end: number): void;
    set_angle_start(angle_start: number): void;
    set_angle_tilt(axis: RotateAxis, angle_tilt: number): void;
    set_center(x: number, y: number): void;
    set_direction(direction: RotateDirection): void;
    set_height(height: number): void;
    set_tilt(angle_tilt_x: number, angle_tilt_y: number, angle_tilt_z: number): void;
    set_width(width: number): void;
}
export module BehaviourOpacity {
    export interface ConstructorProperties extends Behaviour.ConstructorProperties {
        [key: string]: any;
        opacity_end: number;
        opacity_start: number;
    }
}
export class BehaviourOpacity extends Behaviour implements Scriptable {
    constructor(properties?: Partial<BehaviourOpacity.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BehaviourOpacity.ConstructorProperties>, ...args: any[]): void;
    // Properties
    opacity_end: number;
    opacity_start: number;
    // Constructors
    static ["new"](alpha: Alpha | null, opacity_start: number, opacity_end: number): BehaviourOpacity;
    // Members
    get_bounds(): [number, number];
    set_bounds(opacity_start: number, opacity_end: number): void;
}
export module BehaviourPath {
    export interface ConstructorProperties extends Behaviour.ConstructorProperties {
        [key: string]: any;
        path: Path;
    }
}
export class BehaviourPath extends Behaviour implements Scriptable {
    constructor(properties?: Partial<BehaviourPath.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BehaviourPath.ConstructorProperties>, ...args: any[]): void;
    // Properties
    path: Path;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'knot-reached', callback: (_source: this, knot_num: number) => void): number;
    connect_after(signal: 'knot-reached', callback: (_source: this, knot_num: number) => void): number;
    emit(signal: 'knot-reached', knot_num: number): void;
    // Constructors
    static ["new"](alpha: Alpha | null, path: Path): BehaviourPath;
    static new_with_description(alpha: Alpha | null, desc: string): BehaviourPath;
    static new_with_knots(alpha: Alpha | null, knots: Knot[]): BehaviourPath;
    // Members
    get_path(): Path;
    set_path(path: Path): void;
    vfunc_knot_reached(knot_num: number): void;
}
export module BehaviourRotate {
    export interface ConstructorProperties extends Behaviour.ConstructorProperties {
        [key: string]: any;
        angle_end: number;
        angle_start: number;
        axis: RotateAxis;
        center_x: number;
        center_y: number;
        center_z: number;
        direction: RotateDirection;
    }
}
export class BehaviourRotate extends Behaviour implements Scriptable {
    constructor(properties?: Partial<BehaviourRotate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BehaviourRotate.ConstructorProperties>, ...args: any[]): void;
    // Properties
    angle_end: number;
    angle_start: number;
    axis: RotateAxis;
    center_x: number;
    center_y: number;
    center_z: number;
    direction: RotateDirection;
    // Constructors
    static ["new"](alpha: Alpha | null, axis: RotateAxis, direction: RotateDirection, angle_start: number, angle_end: number): BehaviourRotate;
    // Members
    get_axis(): RotateAxis;
    get_bounds(): [number, number];
    get_center(): [number, number, number];
    get_direction(): RotateDirection;
    set_axis(axis: RotateAxis): void;
    set_bounds(angle_start: number, angle_end: number): void;
    set_center(x: number, y: number, z: number): void;
    set_direction(direction: RotateDirection): void;
}
export module BehaviourScale {
    export interface ConstructorProperties extends Behaviour.ConstructorProperties {
        [key: string]: any;
        x_scale_end: number;
        x_scale_start: number;
        y_scale_end: number;
        y_scale_start: number;
    }
}
export class BehaviourScale extends Behaviour implements Scriptable {
    constructor(properties?: Partial<BehaviourScale.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BehaviourScale.ConstructorProperties>, ...args: any[]): void;
    // Properties
    x_scale_end: number;
    x_scale_start: number;
    y_scale_end: number;
    y_scale_start: number;
    // Constructors
    static ["new"](alpha: Alpha | null, x_scale_start: number, y_scale_start: number, x_scale_end: number, y_scale_end: number): BehaviourScale;
    // Members
    get_bounds(): [number, number, number, number];
    set_bounds(x_scale_start: number, y_scale_start: number, x_scale_end: number, y_scale_end: number): void;
}
export module BinLayout {
    export interface ConstructorProperties extends LayoutManager.ConstructorProperties {
        [key: string]: any;
        x_align: BinAlignment;
        y_align: BinAlignment;
    }
}
export class BinLayout extends LayoutManager {
    constructor(properties?: Partial<BinLayout.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BinLayout.ConstructorProperties>, ...args: any[]): void;
    // Properties
    x_align: BinAlignment;
    y_align: BinAlignment;
    // Constructors
    static ["new"](x_align: BinAlignment, y_align: BinAlignment): BinLayout;
    // Members
    add(child: Actor, x_align: BinAlignment, y_align: BinAlignment): void;
    get_alignment(child: Actor | null): [BinAlignment | null, BinAlignment | null];
    set_alignment(child: Actor | null, x_align: BinAlignment, y_align: BinAlignment): void;
}
export module BindConstraint {
    export interface ConstructorProperties extends Constraint.ConstructorProperties {
        [key: string]: any;
        coordinate: BindCoordinate;
        offset: number;
        source: Actor;
    }
}
export class BindConstraint extends Constraint {
    constructor(properties?: Partial<BindConstraint.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BindConstraint.ConstructorProperties>, ...args: any[]): void;
    // Properties
    coordinate: BindCoordinate;
    offset: number;
    source: Actor;
    // Constructors
    static ["new"](source: Actor | null, coordinate: BindCoordinate, offset: number): BindConstraint;
    // Members
    get_coordinate(): BindCoordinate;
    get_offset(): number;
    get_source(): Actor;
    set_coordinate(coordinate: BindCoordinate): void;
    set_offset(offset: number): void;
    set_source(source: Actor | null): void;
}
export module BindingPool {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        name: string;
    }
}
export class BindingPool extends GObject.Object {
    constructor(properties?: Partial<BindingPool.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BindingPool.ConstructorProperties>, ...args: any[]): void;
    // Properties
    name: string;
    // Constructors
    static ["new"](name: string): BindingPool;
    // Members
    activate(key_val: number, modifiers: ModifierType, gobject: GObject.Object): boolean;
    block_action(action_name: string): void;
    find_action(key_val: number, modifiers: ModifierType): string;
    install_action(action_name: string, key_val: number, modifiers: ModifierType, callback: BindingActionFunc, notify: GLib.DestroyNotify): void;
    install_closure(action_name: string, key_val: number, modifiers: ModifierType, closure: GObject.Closure): void;
    override_action(key_val: number, modifiers: ModifierType, callback: BindingActionFunc, notify: GLib.DestroyNotify): void;
    override_closure(key_val: number, modifiers: ModifierType, closure: GObject.Closure): void;
    remove_action(key_val: number, modifiers: ModifierType): void;
    unblock_action(action_name: string): void;
    static find(name: string): BindingPool;
    static get_for_class(klass: any | null): BindingPool;
}
export module BlurEffect {
    export interface ConstructorProperties extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
    }
}
export class BlurEffect extends OffscreenEffect {
    constructor(properties?: Partial<BlurEffect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BlurEffect.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): BlurEffect;
}
export module Box {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
        color: Color;
        color_set: boolean;
    }
}
export class Box extends Actor implements Atk.ImplementorIface, Animatable, Container, Scriptable {
    constructor(properties?: Partial<Box.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Box.ConstructorProperties>, ...args: any[]): void;
    // Properties
    color: Color;
    color_set: boolean;
    // Constructors
    static ["new"](manager: LayoutManager): Box;
    static ["new"](...args: never[]): never;
    // Members
    get_color(): Color;
    get_layout_manager(): LayoutManager;
    packv(actor: Actor, properties: string[], values: (GObject.Value | string | boolean | number)[]): void;
    set_color(color: Color | null): void;
    set_layout_manager(manager: LayoutManager): void;
    set_layout_manager(...args: never[]): never;
}
export module BoxLayout {
    export interface ConstructorProperties extends LayoutManager.ConstructorProperties {
        [key: string]: any;
        easing_duration: number;
        easing_mode: number;
        homogeneous: boolean;
        orientation: Orientation;
        pack_start: boolean;
        spacing: number;
        use_animations: boolean;
        vertical: boolean;
    }
}
export class BoxLayout extends LayoutManager {
    constructor(properties?: Partial<BoxLayout.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BoxLayout.ConstructorProperties>, ...args: any[]): void;
    // Properties
    easing_duration: number;
    easing_mode: number;
    homogeneous: boolean;
    orientation: Orientation;
    pack_start: boolean;
    spacing: number;
    use_animations: boolean;
    vertical: boolean;
    // Constructors
    static ["new"](): BoxLayout;
    // Members
    get_alignment(actor: Actor): [BoxAlignment, BoxAlignment];
    get_easing_duration(): number;
    get_easing_mode(): number;
    get_expand(actor: Actor): boolean;
    get_fill(actor: Actor): [boolean, boolean];
    get_homogeneous(): boolean;
    get_orientation(): Orientation;
    get_pack_start(): boolean;
    get_spacing(): number;
    get_use_animations(): boolean;
    get_vertical(): boolean;
    pack(actor: Actor, expand: boolean, x_fill: boolean, y_fill: boolean, x_align: BoxAlignment, y_align: BoxAlignment): void;
    set_alignment(actor: Actor, x_align: BoxAlignment, y_align: BoxAlignment): void;
    set_easing_duration(msecs: number): void;
    set_easing_mode(mode: number): void;
    set_expand(actor: Actor, expand: boolean): void;
    set_fill(actor: Actor, x_fill: boolean, y_fill: boolean): void;
    set_homogeneous(homogeneous: boolean): void;
    set_orientation(orientation: Orientation): void;
    set_pack_start(pack_start: boolean): void;
    set_spacing(spacing: number): void;
    set_use_animations(animate: boolean): void;
    set_vertical(vertical: boolean): void;
}
export module BrightnessContrastEffect {
    export interface ConstructorProperties extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
        brightness: Color;
        contrast: Color;
    }
}
export class BrightnessContrastEffect extends OffscreenEffect {
    constructor(properties?: Partial<BrightnessContrastEffect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BrightnessContrastEffect.ConstructorProperties>, ...args: any[]): void;
    // Properties
    brightness: Color;
    contrast: Color;
    // Constructors
    static ["new"](): BrightnessContrastEffect;
    // Members
    get_brightness(): [number | null, number | null, number | null];
    get_contrast(): [number | null, number | null, number | null];
    set_brightness(brightness: number): void;
    set_brightness_full(red: number, green: number, blue: number): void;
    set_contrast(contrast: number): void;
    set_contrast_full(red: number, green: number, blue: number): void;
}
export module CairoTexture {
    export interface ConstructorProperties extends Texture.ConstructorProperties {
        [key: string]: any;
        auto_resize: boolean;
        surface_height: number;
        surface_width: number;
    }
}
export class CairoTexture extends Texture implements Atk.ImplementorIface, Animatable, Container, Scriptable {
    constructor(properties?: Partial<CairoTexture.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CairoTexture.ConstructorProperties>, ...args: any[]): void;
    // Properties
    auto_resize: boolean;
    surface_height: number;
    surface_width: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'create-surface', callback: (_source: this, width: number, height: number) => cairo.Surface): number;
    connect_after(signal: 'create-surface', callback: (_source: this, width: number, height: number) => cairo.Surface): number;
    emit(signal: 'create-surface', width: number, height: number): void;
    connect(signal: 'draw', callback: (_source: this, cr: cairo.Context) => boolean): number;
    connect_after(signal: 'draw', callback: (_source: this, cr: cairo.Context) => boolean): number;
    emit(signal: 'draw', cr: cairo.Context): void;
    // Constructors
    static ["new"](width: number, height: number): CairoTexture;
    static ["new"](...args: never[]): never;
    // Members
    clear(): void;
    create(): cairo.Context;
    create_region(x_offset: number, y_offset: number, width: number, height: number): cairo.Context;
    get_auto_resize(): boolean;
    get_surface_size(): [number, number];
    invalidate(): void;
    invalidate_rectangle(rect: cairo.RectangleInt | null): void;
    set_auto_resize(value: boolean): void;
    set_surface_size(width: number, height: number): void;
    vfunc_create_surface(width: number, height: number): cairo.Surface;
    vfunc_draw(cr: cairo.Context): boolean;
}
export module Canvas {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        height: number;
        scale_factor: number;
        scale_factor_set: boolean;
        width: number;
    }
}
export class Canvas extends GObject.Object implements Content {
    constructor(properties?: Partial<Canvas.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Canvas.ConstructorProperties>, ...args: any[]): void;
    // Properties
    height: number;
    scale_factor: number;
    scale_factor_set: boolean;
    width: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'draw', callback: (_source: this, cr: cairo.Context, width: number, height: number) => boolean): number;
    connect_after(signal: 'draw', callback: (_source: this, cr: cairo.Context, width: number, height: number) => boolean): number;
    emit(signal: 'draw', cr: cairo.Context, width: number, height: number): void;
    // Members
    get_scale_factor(): number;
    set_scale_factor(scale: number): void;
    set_size(width: number, height: number): boolean;
    vfunc_draw(cr: cairo.Context, width: number, height: number): boolean;
    static new(): Content;
    // Implemented Members
    get_preferred_size(): [boolean, number, number];
    invalidate(): void;
    vfunc_attached(actor: Actor): void;
    vfunc_detached(actor: Actor): void;
    vfunc_get_preferred_size(): [boolean, number, number];
    vfunc_invalidate(): void;
    vfunc_paint_content(actor: Actor, node: PaintNode): void;
}
export module ChildMeta {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        actor: Actor;
        container: Container;
    }
}
export abstract class ChildMeta extends GObject.Object {
    constructor(properties?: Partial<ChildMeta.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ChildMeta.ConstructorProperties>, ...args: any[]): void;
    // Properties
    actor: Actor;
    container: Container;
    // Members
    get_actor(): Actor;
    get_container(): Container;
}
export module ClickAction {
    export interface ConstructorProperties extends Action.ConstructorProperties {
        [key: string]: any;
        held: boolean;
        long_press_duration: number;
        long_press_threshold: number;
        pressed: boolean;
    }
}
export class ClickAction extends Action {
    constructor(properties?: Partial<ClickAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ClickAction.ConstructorProperties>, ...args: any[]): void;
    // Properties
    held: boolean;
    long_press_duration: number;
    long_press_threshold: number;
    pressed: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'clicked', callback: (_source: this, actor: Actor) => void): number;
    connect_after(signal: 'clicked', callback: (_source: this, actor: Actor) => void): number;
    emit(signal: 'clicked', actor: Actor): void;
    connect(signal: 'long-press', callback: (_source: this, actor: Actor, state: LongPressState) => boolean): number;
    connect_after(signal: 'long-press', callback: (_source: this, actor: Actor, state: LongPressState) => boolean): number;
    emit(signal: 'long-press', actor: Actor, state: LongPressState): void;
    // Constructors
    static ["new"](): ClickAction;
    // Members
    get_button(): number;
    get_coords(): [number, number];
    get_state(): ModifierType;
    release(): void;
    vfunc_clicked(actor: Actor): void;
    vfunc_long_press(actor: Actor, state: LongPressState): boolean;
}
export module ClipNode {
    export interface ConstructorProperties extends PaintNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class ClipNode extends PaintNode {
    constructor(properties?: Partial<ClipNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ClipNode.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): ClipNode;
}
export module Clone {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
        source: Actor;
    }
}
export class Clone extends Actor implements Atk.ImplementorIface, Animatable, Container, Scriptable {
    constructor(properties?: Partial<Clone.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Clone.ConstructorProperties>, ...args: any[]): void;
    // Properties
    source: Actor;
    // Constructors
    static ["new"](source: Actor): Clone;
    static ["new"](...args: never[]): never;
    // Members
    get_source(): Actor;
    set_source(source: Actor | null): void;
}
export module ColorNode {
    export interface ConstructorProperties extends PipelineNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class ColorNode extends PipelineNode {
    constructor(properties?: Partial<ColorNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorNode.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](color: Color | null): ColorNode;
}
export module ColorizeEffect {
    export interface ConstructorProperties extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
        tint: Color;
    }
}
export class ColorizeEffect extends OffscreenEffect {
    constructor(properties?: Partial<ColorizeEffect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorizeEffect.ConstructorProperties>, ...args: any[]): void;
    // Properties
    tint: Color;
    // Constructors
    static ["new"](tint: Color): ColorizeEffect;
    // Members
    get_tint(): Color;
    set_tint(tint: Color): void;
}
export module Constraint {
    export interface ConstructorProperties extends ActorMeta.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Constraint extends ActorMeta {
    constructor(properties?: Partial<Constraint.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Constraint.ConstructorProperties>, ...args: any[]): void;
    // Members
    vfunc_update_allocation(actor: Actor, allocation: ActorBox): void;
    vfunc_update_preferred_size(actor: Actor, direction: Orientation, for_size: number, minimum_size: number, natural_size: number): void;
}
export module DeformEffect {
    export interface ConstructorProperties extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
        x_tiles: number;
        y_tiles: number;
    }
}
export abstract class DeformEffect extends OffscreenEffect {
    constructor(properties?: Partial<DeformEffect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeformEffect.ConstructorProperties>, ...args: any[]): void;
    // Properties
    x_tiles: number;
    y_tiles: number;
    // Members
    get_back_material(): Cogl.Handle;
    get_n_tiles(): [number, number];
    invalidate(): void;
    set_back_material(material: Cogl.Handle | null): void;
    set_n_tiles(x_tiles: number, y_tiles: number): void;
    vfunc_deform_vertex(width: number, height: number, vertex: Cogl.TextureVertex): void;
}
export module DesaturateEffect {
    export interface ConstructorProperties extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
        factor: number;
    }
}
export class DesaturateEffect extends OffscreenEffect {
    constructor(properties?: Partial<DesaturateEffect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DesaturateEffect.ConstructorProperties>, ...args: any[]): void;
    // Properties
    factor: number;
    // Constructors
    static ["new"](factor: number): DesaturateEffect;
    // Members
    get_factor(): number;
    set_factor(factor: number): void;
}
export module DeviceManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        backend: Backend;
    }
}
export abstract class DeviceManager extends GObject.Object {
    constructor(properties?: Partial<DeviceManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DeviceManager.ConstructorProperties>, ...args: any[]): void;
    // Properties
    backend: Backend;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'device-added', callback: (_source: this, device: InputDevice) => void): number;
    connect_after(signal: 'device-added', callback: (_source: this, device: InputDevice) => void): number;
    emit(signal: 'device-added', device: InputDevice): void;
    connect(signal: 'device-removed', callback: (_source: this, device: InputDevice) => void): number;
    connect_after(signal: 'device-removed', callback: (_source: this, device: InputDevice) => void): number;
    emit(signal: 'device-removed', device: InputDevice): void;
    // Members
    get_core_device(device_type: InputDeviceType): InputDevice;
    get_device(device_id: number): InputDevice;
    list_devices(): GLib.SList;
    peek_devices(): GLib.SList;
    vfunc_add_device(device: InputDevice): void;
    vfunc_get_core_device(device_type: InputDeviceType): InputDevice;
    vfunc_get_device(device_id: number): InputDevice;
    vfunc_remove_device(device: InputDevice): void;
    vfunc_select_stage_events(stage: Stage): void;
    static get_default(): DeviceManager;
}
export module DragAction {
    export interface ConstructorProperties extends Action.ConstructorProperties {
        [key: string]: any;
        drag_area: Rect;
        drag_area_set: boolean;
        drag_axis: DragAxis;
        drag_handle: Actor;
        x_drag_threshold: number;
        y_drag_threshold: number;
    }
}
export class DragAction extends Action {
    constructor(properties?: Partial<DragAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DragAction.ConstructorProperties>, ...args: any[]): void;
    // Properties
    drag_area: Rect;
    drag_area_set: boolean;
    drag_axis: DragAxis;
    drag_handle: Actor;
    x_drag_threshold: number;
    y_drag_threshold: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'drag-begin', callback: (_source: this, actor: Actor, event_x: number, event_y: number, modifiers: ModifierType) => void): number;
    connect_after(signal: 'drag-begin', callback: (_source: this, actor: Actor, event_x: number, event_y: number, modifiers: ModifierType) => void): number;
    emit(signal: 'drag-begin', actor: Actor, event_x: number, event_y: number, modifiers: ModifierType): void;
    connect(signal: 'drag-end', callback: (_source: this, actor: Actor, event_x: number, event_y: number, modifiers: ModifierType) => void): number;
    connect_after(signal: 'drag-end', callback: (_source: this, actor: Actor, event_x: number, event_y: number, modifiers: ModifierType) => void): number;
    emit(signal: 'drag-end', actor: Actor, event_x: number, event_y: number, modifiers: ModifierType): void;
    connect(signal: 'drag-motion', callback: (_source: this, actor: Actor, delta_x: number, delta_y: number) => void): number;
    connect_after(signal: 'drag-motion', callback: (_source: this, actor: Actor, delta_x: number, delta_y: number) => void): number;
    emit(signal: 'drag-motion', actor: Actor, delta_x: number, delta_y: number): void;
    connect(signal: 'drag-progress', callback: (_source: this, actor: Actor, delta_x: number, delta_y: number) => boolean): number;
    connect_after(signal: 'drag-progress', callback: (_source: this, actor: Actor, delta_x: number, delta_y: number) => boolean): number;
    emit(signal: 'drag-progress', actor: Actor, delta_x: number, delta_y: number): void;
    // Constructors
    static ["new"](): DragAction;
    // Members
    get_drag_area(): [boolean, Rect];
    get_drag_axis(): DragAxis;
    get_drag_handle(): Actor;
    get_drag_threshold(): [number, number];
    get_motion_coords(): [number, number];
    get_press_coords(): [number, number];
    set_drag_area(drag_area: Rect | null): void;
    set_drag_axis(axis: DragAxis): void;
    set_drag_handle(handle: Actor | null): void;
    set_drag_threshold(x_threshold: number, y_threshold: number): void;
    vfunc_drag_begin(actor: Actor, event_x: number, event_y: number, modifiers: ModifierType): void;
    vfunc_drag_end(actor: Actor, event_x: number, event_y: number, modifiers: ModifierType): void;
    vfunc_drag_motion(actor: Actor, delta_x: number, delta_y: number): void;
    vfunc_drag_progress(actor: Actor, delta_x: number, delta_y: number): boolean;
}
export module DropAction {
    export interface ConstructorProperties extends Action.ConstructorProperties {
        [key: string]: any;
    }
}
export class DropAction extends Action {
    constructor(properties?: Partial<DropAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DropAction.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'can-drop', callback: (_source: this, actor: Actor, event_x: number, event_y: number) => boolean): number;
    connect_after(signal: 'can-drop', callback: (_source: this, actor: Actor, event_x: number, event_y: number) => boolean): number;
    emit(signal: 'can-drop', actor: Actor, event_x: number, event_y: number): void;
    connect(signal: 'drop', callback: (_source: this, actor: Actor, event_x: number, event_y: number) => void): number;
    connect_after(signal: 'drop', callback: (_source: this, actor: Actor, event_x: number, event_y: number) => void): number;
    emit(signal: 'drop', actor: Actor, event_x: number, event_y: number): void;
    connect(signal: 'drop-cancel', callback: (_source: this, actor: Actor, event_x: number, event_y: number) => void): number;
    connect_after(signal: 'drop-cancel', callback: (_source: this, actor: Actor, event_x: number, event_y: number) => void): number;
    emit(signal: 'drop-cancel', actor: Actor, event_x: number, event_y: number): void;
    connect(signal: 'over-in', callback: (_source: this, actor: Actor) => void): number;
    connect_after(signal: 'over-in', callback: (_source: this, actor: Actor) => void): number;
    emit(signal: 'over-in', actor: Actor): void;
    connect(signal: 'over-out', callback: (_source: this, actor: Actor) => void): number;
    connect_after(signal: 'over-out', callback: (_source: this, actor: Actor) => void): number;
    emit(signal: 'over-out', actor: Actor): void;
    // Constructors
    static ["new"](): DropAction;
    // Members
    vfunc_can_drop(actor: Actor, event_x: number, event_y: number): boolean;
    vfunc_drop(actor: Actor, event_x: number, event_y: number): void;
    vfunc_over_in(actor: Actor): void;
    vfunc_over_out(actor: Actor): void;
}
export module Effect {
    export interface ConstructorProperties extends ActorMeta.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Effect extends ActorMeta {
    constructor(properties?: Partial<Effect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Effect.ConstructorProperties>, ...args: any[]): void;
    // Members
    queue_repaint(): void;
    vfunc_get_paint_volume(volume: PaintVolume): boolean;
    vfunc_paint(flags: EffectPaintFlags): void;
    vfunc_pick(flags: EffectPaintFlags): void;
    vfunc_post_paint(): void;
    vfunc_pre_paint(): boolean;
}
export module FixedLayout {
    export interface ConstructorProperties extends LayoutManager.ConstructorProperties {
        [key: string]: any;
    }
}
export class FixedLayout extends LayoutManager {
    constructor(properties?: Partial<FixedLayout.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FixedLayout.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): FixedLayout;
}
export module FlowLayout {
    export interface ConstructorProperties extends LayoutManager.ConstructorProperties {
        [key: string]: any;
        column_spacing: number;
        homogeneous: boolean;
        max_column_width: number;
        max_row_height: number;
        min_column_width: number;
        min_row_height: number;
        orientation: FlowOrientation;
        row_spacing: number;
        snap_to_grid: boolean;
    }
}
export class FlowLayout extends LayoutManager {
    constructor(properties?: Partial<FlowLayout.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FlowLayout.ConstructorProperties>, ...args: any[]): void;
    // Properties
    column_spacing: number;
    homogeneous: boolean;
    max_column_width: number;
    max_row_height: number;
    min_column_width: number;
    min_row_height: number;
    orientation: FlowOrientation;
    row_spacing: number;
    snap_to_grid: boolean;
    // Constructors
    static ["new"](orientation: FlowOrientation): FlowLayout;
    // Members
    get_column_spacing(): number;
    get_column_width(): [number, number];
    get_homogeneous(): boolean;
    get_orientation(): FlowOrientation;
    get_row_height(): [number, number];
    get_row_spacing(): number;
    get_snap_to_grid(): boolean;
    set_column_spacing(spacing: number): void;
    set_column_width(min_width: number, max_width: number): void;
    set_homogeneous(homogeneous: boolean): void;
    set_orientation(orientation: FlowOrientation): void;
    set_row_height(min_height: number, max_height: number): void;
    set_row_spacing(spacing: number): void;
    set_snap_to_grid(snap_to_grid: boolean): void;
}
export module GestureAction {
    export interface ConstructorProperties extends Action.ConstructorProperties {
        [key: string]: any;
        n_touch_points: number;
        threshold_trigger_distance_x: number;
        threshold_trigger_distance_y: number;
        threshold_trigger_edge: GestureTriggerEdge;
    }
}
export class GestureAction extends Action {
    constructor(properties?: Partial<GestureAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureAction.ConstructorProperties>, ...args: any[]): void;
    // Properties
    n_touch_points: number;
    threshold_trigger_distance_x: number;
    threshold_trigger_distance_y: number;
    threshold_trigger_edge: GestureTriggerEdge;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'gesture-begin', callback: (_source: this, actor: Actor) => boolean): number;
    connect_after(signal: 'gesture-begin', callback: (_source: this, actor: Actor) => boolean): number;
    emit(signal: 'gesture-begin', actor: Actor): void;
    connect(signal: 'gesture-cancel', callback: (_source: this, actor: Actor) => void): number;
    connect_after(signal: 'gesture-cancel', callback: (_source: this, actor: Actor) => void): number;
    emit(signal: 'gesture-cancel', actor: Actor): void;
    connect(signal: 'gesture-end', callback: (_source: this, actor: Actor) => void): number;
    connect_after(signal: 'gesture-end', callback: (_source: this, actor: Actor) => void): number;
    emit(signal: 'gesture-end', actor: Actor): void;
    connect(signal: 'gesture-progress', callback: (_source: this, actor: Actor) => boolean): number;
    connect_after(signal: 'gesture-progress', callback: (_source: this, actor: Actor) => boolean): number;
    emit(signal: 'gesture-progress', actor: Actor): void;
    // Constructors
    static ["new"](): GestureAction;
    // Members
    cancel(): void;
    get_device(point: number): InputDevice;
    get_last_event(point: number): Event;
    get_motion_coords(point: number): [number | null, number | null];
    get_motion_delta(point: number): [number, number | null, number | null];
    get_n_current_points(): number;
    get_n_touch_points(): number;
    get_press_coords(point: number): [number | null, number | null];
    get_release_coords(point: number): [number | null, number | null];
    get_sequence(point: number): EventSequence;
    get_threshold_trigger_distance(): [number | null, number | null];
    get_threshold_trigger_edge(): GestureTriggerEdge;
    get_threshold_trigger_egde(): GestureTriggerEdge;
    get_velocity(point: number): [number, number | null, number | null];
    set_n_touch_points(nb_points: number): void;
    set_threshold_trigger_distance(x: number, y: number): void;
    set_threshold_trigger_edge(edge: GestureTriggerEdge): void;
    vfunc_gesture_begin(actor: Actor): boolean;
    vfunc_gesture_cancel(actor: Actor): void;
    vfunc_gesture_end(actor: Actor): void;
    vfunc_gesture_prepare(actor: Actor): boolean;
    vfunc_gesture_progress(actor: Actor): boolean;
}
export module GridLayout {
    export interface ConstructorProperties extends LayoutManager.ConstructorProperties {
        [key: string]: any;
        column_homogeneous: boolean;
        column_spacing: number;
        orientation: Orientation;
        row_homogeneous: boolean;
        row_spacing: number;
    }
}
export class GridLayout extends LayoutManager {
    constructor(properties?: Partial<GridLayout.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GridLayout.ConstructorProperties>, ...args: any[]): void;
    // Properties
    column_homogeneous: boolean;
    column_spacing: number;
    orientation: Orientation;
    row_homogeneous: boolean;
    row_spacing: number;
    // Constructors
    static ["new"](): GridLayout;
    // Members
    attach(child: Actor, left: number, top: number, width: number, height: number): void;
    attach_next_to(child: Actor, sibling: Actor | null, side: GridPosition, width: number, height: number): void;
    get_child_at(left: number, top: number): Actor;
    get_column_homogeneous(): boolean;
    get_column_spacing(): number;
    get_orientation(): Orientation;
    get_row_homogeneous(): boolean;
    get_row_spacing(): number;
    insert_column(position: number): void;
    insert_next_to(sibling: Actor, side: GridPosition): void;
    insert_row(position: number): void;
    set_column_homogeneous(homogeneous: boolean): void;
    set_column_spacing(spacing: number): void;
    set_orientation(orientation: Orientation): void;
    set_row_homogeneous(homogeneous: boolean): void;
    set_row_spacing(spacing: number): void;
}
export module Group {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
    }
}
export class Group extends Actor implements Atk.ImplementorIface, Animatable, Container, Scriptable {
    constructor(properties?: Partial<Group.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Group.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): Group;
    static ["new"](...args: never[]): never;
    // Members
    get_n_children(): number;
    get_nth_child(index_: number): Actor;
    remove_all(): void;
}
export module Image {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Image extends GObject.Object implements Content {
    constructor(properties?: Partial<Image.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Image.ConstructorProperties>, ...args: any[]): void;
    // Members
    set_area(data: (Uint8Array | string), pixel_format: Cogl.PixelFormat, rect: cairo.RectangleInt, row_stride: number): boolean;
    set_bytes(data: (GLib.Bytes | Uint8Array), pixel_format: Cogl.PixelFormat, width: number, height: number, row_stride: number): boolean;
    set_data(data: (Uint8Array | string), pixel_format: Cogl.PixelFormat, width: number, height: number, row_stride: number): boolean;
    set_data(...args: never[]): never;
    static new(): Content;
    // Implemented Members
    get_preferred_size(): [boolean, number, number];
    invalidate(): void;
    vfunc_attached(actor: Actor): void;
    vfunc_detached(actor: Actor): void;
    vfunc_get_preferred_size(): [boolean, number, number];
    vfunc_invalidate(): void;
    vfunc_paint_content(actor: Actor, node: PaintNode): void;
}
export module InputDevice {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        backend: Backend;
        device_manager: DeviceManager;
        device_mode: InputMode;
        device_type: InputDeviceType;
        enabled: boolean;
        has_cursor: boolean;
        id: number;
        n_axes: number;
        name: string;
        product_id: string;
        vendor_id: string;
    }
}
export class InputDevice extends GObject.Object {
    constructor(properties?: Partial<InputDevice.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InputDevice.ConstructorProperties>, ...args: any[]): void;
    // Properties
    backend: Backend;
    device_manager: DeviceManager;
    device_mode: InputMode;
    device_type: InputDeviceType;
    enabled: boolean;
    has_cursor: boolean;
    id: number;
    n_axes: number;
    name: string;
    product_id: string;
    vendor_id: string;
    // Members
    get_associated_device(): InputDevice;
    get_axis(index_: number): InputAxis;
    get_axis_value(axes: number[], axis: InputAxis): [boolean, number];
    get_coords(sequence: EventSequence | null): [boolean, Point];
    get_device_coords(): [number, number];
    get_device_id(): number;
    get_device_mode(): InputMode;
    get_device_name(): string;
    get_device_type(): InputDeviceType;
    get_enabled(): boolean;
    get_grabbed_actor(): Actor;
    get_has_cursor(): boolean;
    get_key(index_: number): [boolean, number, ModifierType];
    get_modifier_state(): ModifierType;
    get_n_axes(): number;
    get_n_keys(): number;
    get_pointer_actor(): Actor;
    get_pointer_stage(): Stage;
    get_product_id(): string;
    get_slave_devices(): GLib.List;
    get_vendor_id(): string;
    grab(actor: Actor): void;
    keycode_to_evdev(hardware_keycode: number, evdev_keycode: number): boolean;
    sequence_get_grabbed_actor(sequence: EventSequence): Actor;
    sequence_grab(sequence: EventSequence, actor: Actor): void;
    sequence_ungrab(sequence: EventSequence): void;
    set_enabled(enabled: boolean): void;
    set_key(index_: number, keyval: number, modifiers: ModifierType): void;
    ungrab(): void;
    update_from_event(event: Event, update_stage: boolean): void;
}
export module Interval {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        "final": GObject.Value;
        initial: GObject.Value;
        value_type: GType;
    }
}
export class Interval extends GObject.InitiallyUnowned implements Scriptable {
    constructor(properties?: Partial<Interval.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Interval.ConstructorProperties>, ...args: any[]): void;
    // Properties
    "final": GObject.Value;
    initial: GObject.Value;
    value_type: GType;
    // Constructors
    static new_with_values(gtype: GType, initial: (GObject.Value | string | boolean | number) | null, _final: (GObject.Value | string | boolean | number) | null): Interval;
    // Members
    clone(): Interval;
    compute(factor: number): GObject.Value;
    compute_value(factor: number): [boolean, GObject.Value];
    get_final_value(): GObject.Value;
    get_initial_value(): GObject.Value;
    get_value_type(): GType;
    is_valid(): boolean;
    peek_final_value(): GObject.Value;
    peek_initial_value(): GObject.Value;
    set_final(value: (GObject.Value | string | boolean | number)): void;
    set_initial(value: (GObject.Value | string | boolean | number)): void;
    validate(pspec: GObject.ParamSpec): boolean;
    vfunc_compute_value(factor: number): [boolean, GObject.Value];
    vfunc_validate(pspec: GObject.ParamSpec): boolean;
    // Implemented Members
    get_id(): string;
    parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_id(id_: string): void;
}
export module KeyframeTransition {
    export interface ConstructorProperties extends PropertyTransition.ConstructorProperties {
        [key: string]: any;
    }
}
export class KeyframeTransition extends PropertyTransition implements Scriptable {
    constructor(properties?: Partial<KeyframeTransition.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<KeyframeTransition.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](property_name: string): KeyframeTransition;
    static ["new"](...args: never[]): never;
    // Members
    clear(): void;
    get_key_frame(index_: number): [number | null, AnimationMode | null, GObject.Value];
    get_n_key_frames(): number;
    set_key_frame(index_: number, key: number, mode: AnimationMode, value: (GObject.Value | string | boolean | number)): void;
    set_key_frames(key_frames: number[]): void;
    set_modes(modes: AnimationMode[]): void;
    set_values(values: (GObject.Value | string | boolean | number)[]): void;
}
export module LayoutManager {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class LayoutManager extends GObject.InitiallyUnowned {
    constructor(properties?: Partial<LayoutManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LayoutManager.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'layout-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'layout-changed', callback: (_source: this) => void): number;
    emit(signal: 'layout-changed'): void;
    // Members
    allocate(container: Container, allocation: ActorBox, flags: AllocationFlags): void;
    begin_animation(duration: number, mode: number): Alpha;
    child_get_property(container: Container, actor: Actor, property_name: string, value: (GObject.Value | string | boolean | number)): void;
    child_set_property(container: Container, actor: Actor, property_name: string, value: (GObject.Value | string | boolean | number)): void;
    end_animation(): void;
    find_child_property(name: string): GObject.ParamSpec;
    get_animation_progress(): number;
    get_child_meta(container: Container, actor: Actor): LayoutMeta;
    get_preferred_height(container: Container, for_width: number): [number | null, number | null];
    get_preferred_width(container: Container, for_height: number): [number | null, number | null];
    layout_changed(): void;
    list_child_properties(): GObject.ParamSpec[];
    set_container(container: Container | null): void;
    vfunc_allocate(container: Container, allocation: ActorBox, flags: AllocationFlags): void;
    vfunc_begin_animation(duration: number, mode: number): Alpha;
    vfunc_end_animation(): void;
    vfunc_get_animation_progress(): number;
    vfunc_get_child_meta_type(): GType;
    vfunc_get_preferred_height(container: Container, for_width: number): [number | null, number | null];
    vfunc_get_preferred_width(container: Container, for_height: number): [number | null, number | null];
    vfunc_layout_changed(): void;
    vfunc_set_container(container: Container | null): void;
}
export module LayoutMeta {
    export interface ConstructorProperties extends ChildMeta.ConstructorProperties {
        [key: string]: any;
        manager: LayoutManager;
    }
}
export abstract class LayoutMeta extends ChildMeta {
    constructor(properties?: Partial<LayoutMeta.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LayoutMeta.ConstructorProperties>, ...args: any[]): void;
    // Properties
    manager: LayoutManager;
    // Members
    get_manager(): LayoutManager;
}
export module ListModel {
    export interface ConstructorProperties extends Model.ConstructorProperties {
        [key: string]: any;
    }
}
export class ListModel extends Model implements Scriptable {
    constructor(properties?: Partial<ListModel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ListModel.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static newv(types: GType[], names: string[]): ListModel;
    static newv(...args: never[]): never;
}
export module Model {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        filter_set: boolean;
    }
}
export abstract class Model extends GObject.Object implements Scriptable {
    constructor(properties?: Partial<Model.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Model.ConstructorProperties>, ...args: any[]): void;
    // Properties
    filter_set: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'filter-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'filter-changed', callback: (_source: this) => void): number;
    emit(signal: 'filter-changed'): void;
    connect(signal: 'row-added', callback: (_source: this, iter: ModelIter) => void): number;
    connect_after(signal: 'row-added', callback: (_source: this, iter: ModelIter) => void): number;
    emit(signal: 'row-added', iter: ModelIter): void;
    connect(signal: 'row-changed', callback: (_source: this, iter: ModelIter) => void): number;
    connect_after(signal: 'row-changed', callback: (_source: this, iter: ModelIter) => void): number;
    emit(signal: 'row-changed', iter: ModelIter): void;
    connect(signal: 'row-removed', callback: (_source: this, iter: ModelIter) => void): number;
    connect_after(signal: 'row-removed', callback: (_source: this, iter: ModelIter) => void): number;
    emit(signal: 'row-removed', iter: ModelIter): void;
    connect(signal: 'sort-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'sort-changed', callback: (_source: this) => void): number;
    emit(signal: 'sort-changed'): void;
    // Members
    appendv(columns: number[], values: (GObject.Value | string | boolean | number)[]): void;
    filter_iter(iter: ModelIter): boolean;
    filter_row(row: number): boolean;
    foreach(func: ModelForeachFunc): void;
    get_column_name(column: number): string;
    get_column_type(column: number): GType;
    get_filter_set(): boolean;
    get_first_iter(): ModelIter;
    get_iter_at_row(row: number): ModelIter;
    get_last_iter(): ModelIter;
    get_n_columns(): number;
    get_n_rows(): number;
    get_sorting_column(): number;
    insert_value(row: number, column: number, value: (GObject.Value | string | boolean | number)): void;
    insertv(row: number, columns: number[], values: (GObject.Value | string | boolean | number)[]): void;
    prependv(columns: number[], values: (GObject.Value | string | boolean | number)[]): void;
    remove(row: number): void;
    resort(): void;
    set_filter(func: ModelFilterFunc | null, notify: GLib.DestroyNotify): void;
    set_names(names: string[]): void;
    set_sort(column: number, func: ModelSortFunc | null, notify: GLib.DestroyNotify): void;
    set_sorting_column(column: number): void;
    set_types(types: GType[]): void;
    vfunc_filter_changed(): void;
    vfunc_get_column_name(column: number): string;
    vfunc_get_column_type(column: number): GType;
    vfunc_get_iter_at_row(row: number): ModelIter;
    vfunc_get_n_columns(): number;
    vfunc_get_n_rows(): number;
    vfunc_remove_row(row: number): void;
    vfunc_row_added(iter: ModelIter): void;
    vfunc_row_changed(iter: ModelIter): void;
    vfunc_row_removed(iter: ModelIter): void;
    vfunc_sort_changed(): void;
    // Implemented Members
    get_id(): string;
    parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_id(id_: string): void;
}
export module ModelIter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        model: Model;
        row: number;
    }
}
export abstract class ModelIter extends GObject.Object {
    constructor(properties?: Partial<ModelIter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModelIter.ConstructorProperties>, ...args: any[]): void;
    // Properties
    model: Model;
    row: number;
    // Members
    copy(): ModelIter;
    get_model(): Model;
    get_row(): number;
    get_value(column: number): GObject.Value;
    is_first(): boolean;
    is_last(): boolean;
    next(): ModelIter;
    prev(): ModelIter;
    set_value(column: number, value: (GObject.Value | string | boolean | number)): void;
    vfunc_copy(): this;
    vfunc_get_model(): Model;
    vfunc_get_row(): number;
    vfunc_get_value(column: number): GObject.Value;
    vfunc_is_first(): boolean;
    vfunc_is_last(): boolean;
    vfunc_next(): this;
    vfunc_prev(): this;
    vfunc_set_value(column: number, value: (GObject.Value | string | boolean | number)): void;
}
export module OffscreenEffect {
    export interface ConstructorProperties extends Effect.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class OffscreenEffect extends Effect {
    constructor(properties?: Partial<OffscreenEffect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<OffscreenEffect.ConstructorProperties>, ...args: any[]): void;
    // Members
    create_texture(width: number, height: number): Cogl.Handle;
    get_target(): any;
    get_target_rect(): [boolean, Rect];
    get_target_size(): [boolean, number, number];
    get_texture(): Cogl.Handle;
    paint_target(): void;
    vfunc_create_texture(width: number, height: number): Cogl.Handle;
    vfunc_paint_target(): void;
}
export module PageTurnEffect {
    export interface ConstructorProperties extends DeformEffect.ConstructorProperties {
        [key: string]: any;
        angle: number;
        period: number;
        radius: number;
    }
}
export class PageTurnEffect extends DeformEffect {
    constructor(properties?: Partial<PageTurnEffect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PageTurnEffect.ConstructorProperties>, ...args: any[]): void;
    // Properties
    angle: number;
    period: number;
    radius: number;
    // Constructors
    static ["new"](period: number, angle: number, radius: number): PageTurnEffect;
    // Members
    get_angle(): number;
    get_period(): number;
    get_radius(): number;
    set_angle(angle: number): void;
    set_period(period: number): void;
    set_radius(radius: number): void;
}
export module PaintNode {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class PaintNode {
    constructor(properties?: Partial<PaintNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PaintNode.ConstructorProperties>, ...args: any[]): void;
    // Members
    add_child(child: PaintNode): void;
    add_rectangle(rect: ActorBox): void;
    add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void;
    ref(): PaintNode;
    set_name(name: string): void;
    unref(): void;
}
export module PanAction {
    export interface ConstructorProperties extends GestureAction.ConstructorProperties {
        [key: string]: any;
        acceleration_factor: number;
        deceleration: number;
        interpolate: boolean;
        pan_axis: PanAxis;
    }
}
export class PanAction extends GestureAction {
    constructor(properties?: Partial<PanAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PanAction.ConstructorProperties>, ...args: any[]): void;
    // Properties
    acceleration_factor: number;
    deceleration: number;
    interpolate: boolean;
    pan_axis: PanAxis;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'pan', callback: (_source: this, actor: Actor, is_interpolated: boolean) => boolean): number;
    connect_after(signal: 'pan', callback: (_source: this, actor: Actor, is_interpolated: boolean) => boolean): number;
    emit(signal: 'pan', actor: Actor, is_interpolated: boolean): void;
    connect(signal: 'pan-stopped', callback: (_source: this, actor: Actor) => void): number;
    connect_after(signal: 'pan-stopped', callback: (_source: this, actor: Actor) => void): number;
    emit(signal: 'pan-stopped', actor: Actor): void;
    // Constructors
    static ["new"](): PanAction;
    static ["new"](...args: never[]): never;
    // Members
    get_acceleration_factor(): number;
    get_constrained_motion_delta(point: number): [number, number | null, number | null];
    get_deceleration(): number;
    get_interpolate(): boolean;
    get_interpolated_coords(): [number | null, number | null];
    get_interpolated_delta(): [number, number | null, number | null];
    get_motion_coords(point: number): [number | null, number | null];
    get_motion_delta(point: number): [number, number | null, number | null];
    get_pan_axis(): PanAxis;
    set_acceleration_factor(factor: number): void;
    set_deceleration(rate: number): void;
    set_interpolate(should_interpolate: boolean): void;
    set_pan_axis(axis: PanAxis): void;
    vfunc_pan(actor: Actor, is_interpolated: boolean): boolean;
    vfunc_pan_stopped(actor: Actor): void;
}
export module ParamSpecUnit {
    export interface ConstructorProperties extends GObject.ParamSpec.ConstructorProperties {
        [key: string]: any;
    }
}
export class ParamSpecUnit extends GObject.ParamSpec {
    constructor(properties?: Partial<ParamSpecUnit.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ParamSpecUnit.ConstructorProperties>, ...args: any[]): void;
}
export module Path {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        description: string;
        length: number;
    }
}
export class Path extends GObject.InitiallyUnowned {
    constructor(properties?: Partial<Path.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Path.ConstructorProperties>, ...args: any[]): void;
    // Properties
    description: string;
    length: number;
    // Constructors
    static ["new"](): Path;
    static new_with_description(desc: string): Path;
    // Members
    add_cairo_path(cpath: cairo.Path): void;
    add_close(): void;
    add_curve_to(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void;
    add_line_to(x: number, y: number): void;
    add_move_to(x: number, y: number): void;
    add_node(node: PathNode): void;
    add_rel_curve_to(x_1: number, y_1: number, x_2: number, y_2: number, x_3: number, y_3: number): void;
    add_rel_line_to(x: number, y: number): void;
    add_rel_move_to(x: number, y: number): void;
    add_string(str: string): boolean;
    clear(): void;
    foreach(callback: PathCallback): void;
    get_description(): string;
    get_length(): number;
    get_n_nodes(): number;
    get_node(index_: number): PathNode;
    get_nodes(): GLib.SList;
    get_position(progress: number): [number, Knot];
    insert_node(index_: number, node: PathNode): void;
    remove_node(index_: number): void;
    replace_node(index_: number, node: PathNode): void;
    set_description(str: string): boolean;
    to_cairo_path(cr: cairo.Context): void;
}
export module PathConstraint {
    export interface ConstructorProperties extends Constraint.ConstructorProperties {
        [key: string]: any;
        offset: number;
        path: Path;
    }
}
export class PathConstraint extends Constraint {
    constructor(properties?: Partial<PathConstraint.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PathConstraint.ConstructorProperties>, ...args: any[]): void;
    // Properties
    offset: number;
    path: Path;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'node-reached', callback: (_source: this, actor: Actor, index: number) => void): number;
    connect_after(signal: 'node-reached', callback: (_source: this, actor: Actor, index: number) => void): number;
    emit(signal: 'node-reached', actor: Actor, index: number): void;
    // Constructors
    static ["new"](path: Path | null, offset: number): PathConstraint;
    // Members
    get_offset(): number;
    get_path(): Path;
    set_offset(offset: number): void;
    set_path(path: Path | null): void;
}
export module PipelineNode {
    export interface ConstructorProperties extends PaintNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class PipelineNode extends PaintNode {
    constructor(properties?: Partial<PipelineNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PipelineNode.ConstructorProperties>, ...args: any[]): void;
}
export module PropertyTransition {
    export interface ConstructorProperties extends Transition.ConstructorProperties {
        [key: string]: any;
        property_name: string;
    }
}
export class PropertyTransition extends Transition implements Scriptable {
    constructor(properties?: Partial<PropertyTransition.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PropertyTransition.ConstructorProperties>, ...args: any[]): void;
    // Properties
    property_name: string;
    // Constructors
    static ["new"](property_name: string | null): PropertyTransition;
    static ["new"](...args: never[]): never;
    // Members
    get_property_name(): string;
    set_property_name(property_name: string | null): void;
}
export module Rectangle {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
        border_color: Color;
        border_width: number;
        color: Color;
        has_border: boolean;
    }
}
export class Rectangle extends Actor implements Atk.ImplementorIface, Animatable, Container, Scriptable {
    constructor(properties?: Partial<Rectangle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Rectangle.ConstructorProperties>, ...args: any[]): void;
    // Properties
    border_color: Color;
    border_width: number;
    color: Color;
    has_border: boolean;
    // Constructors
    static ["new"](): Rectangle;
    static ["new"](...args: never[]): never;
    static new_with_color(color: Color): Rectangle;
    // Members
    get_border_color(): Color;
    get_border_width(): number;
    get_color(): Color;
    set_border_color(color: Color): void;
    set_border_width(width: number): void;
    set_color(color: Color): void;
}
export module RotateAction {
    export interface ConstructorProperties extends GestureAction.ConstructorProperties {
        [key: string]: any;
    }
}
export class RotateAction extends GestureAction {
    constructor(properties?: Partial<RotateAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RotateAction.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'rotate', callback: (_source: this, actor: Actor, angle: number) => boolean): number;
    connect_after(signal: 'rotate', callback: (_source: this, actor: Actor, angle: number) => boolean): number;
    emit(signal: 'rotate', actor: Actor, angle: number): void;
    // Constructors
    static ["new"](): RotateAction;
    static ["new"](...args: never[]): never;
    // Members
    vfunc_rotate(actor: Actor, angle: number): boolean;
}
export module Score {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        loop: boolean;
    }
}
export class Score extends GObject.Object {
    constructor(properties?: Partial<Score.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Score.ConstructorProperties>, ...args: any[]): void;
    // Properties
    loop: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'completed', callback: (_source: this) => void): number;
    connect_after(signal: 'completed', callback: (_source: this) => void): number;
    emit(signal: 'completed'): void;
    connect(signal: 'paused', callback: (_source: this) => void): number;
    connect_after(signal: 'paused', callback: (_source: this) => void): number;
    emit(signal: 'paused'): void;
    connect(signal: 'started', callback: (_source: this) => void): number;
    connect_after(signal: 'started', callback: (_source: this) => void): number;
    emit(signal: 'started'): void;
    connect(signal: 'timeline-completed', callback: (_source: this, timeline: Timeline) => void): number;
    connect_after(signal: 'timeline-completed', callback: (_source: this, timeline: Timeline) => void): number;
    emit(signal: 'timeline-completed', timeline: Timeline): void;
    connect(signal: 'timeline-started', callback: (_source: this, timeline: Timeline) => void): number;
    connect_after(signal: 'timeline-started', callback: (_source: this, timeline: Timeline) => void): number;
    emit(signal: 'timeline-started', timeline: Timeline): void;
    // Constructors
    static ["new"](): Score;
    // Members
    append(parent: Timeline | null, timeline: Timeline): number;
    append_at_marker(parent: Timeline, marker_name: string, timeline: Timeline): number;
    get_loop(): boolean;
    get_timeline(id_: number): Timeline;
    is_playing(): boolean;
    list_timelines(): GLib.SList;
    pause(): void;
    remove(id_: number): void;
    remove_all(): void;
    rewind(): void;
    set_loop(loop: boolean): void;
    start(): void;
    stop(): void;
    vfunc_completed(): void;
    vfunc_paused(): void;
    vfunc_started(): void;
    vfunc_timeline_completed(timeline: Timeline): void;
    vfunc_timeline_started(timeline: Timeline): void;
}
export module Script {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        filename: string;
        filename_set: boolean;
        translation_domain: string;
    }
}
export class Script extends GObject.Object {
    constructor(properties?: Partial<Script.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Script.ConstructorProperties>, ...args: any[]): void;
    // Properties
    filename: string;
    filename_set: boolean;
    translation_domain: string;
    // Constructors
    static ["new"](): Script;
    // Members
    add_search_paths(paths: string[]): void;
    add_states(name: string | null, state: State): void;
    connect_signals(user_data: any | null): void;
    connect_signals_full(func: ScriptConnectFunc): void;
    ensure_objects(): void;
    get_object<T = GObject.Object>(name: string): T;
    get_states(name: string | null): State;
    get_translation_domain(): string;
    get_type_from_name(type_name: string): GType;
    list_objects(): GLib.List;
    load_from_data(data: string, length: number): number;
    load_from_file(filename: string): number;
    load_from_resource(resource_path: string): number;
    lookup_filename(filename: string): string;
    set_translation_domain(domain: string | null): void;
    unmerge_objects(merge_id: number): void;
    vfunc_get_type_from_name(type_name: string): GType;
}
export module ScrollActor {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
        scroll_mode: ScrollMode;
    }
}
export class ScrollActor extends Actor implements Atk.ImplementorIface, Animatable, Container, Scriptable {
    constructor(properties?: Partial<ScrollActor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScrollActor.ConstructorProperties>, ...args: any[]): void;
    // Properties
    scroll_mode: ScrollMode;
    // Constructors
    static ["new"](): ScrollActor;
    static ["new"](...args: never[]): never;
    // Members
    get_scroll_mode(): ScrollMode;
    scroll_to_point(point: Point): void;
    scroll_to_rect(rect: Rect): void;
    set_scroll_mode(mode: ScrollMode): void;
}
export module Settings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        backend: Backend;
        dnd_drag_threshold: number;
        double_click_distance: number;
        double_click_time: number;
        font_antialias: number;
        font_dpi: number;
        font_hint_style: string;
        font_hinting: number;
        font_name: string;
        font_subpixel_order: string;
        fontconfig_timestamp: number;
        long_press_duration: number;
        password_hint_time: number;
        unscaled_font_dpi: number;
        window_scaling_factor: number;
    }
}
export class Settings extends GObject.Object {
    constructor(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]): void;
    // Properties
    backend: Backend;
    dnd_drag_threshold: number;
    double_click_distance: number;
    double_click_time: number;
    font_antialias: number;
    font_dpi: number;
    font_hint_style: string;
    font_hinting: number;
    font_name: string;
    font_subpixel_order: string;
    fontconfig_timestamp: number;
    long_press_duration: number;
    password_hint_time: number;
    unscaled_font_dpi: number;
    window_scaling_factor: number;
    // Members
    static get_default(): Settings;
}
export module Shader {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        compiled: boolean;
        enabled: boolean;
        fragment_source: string;
        vertex_source: string;
    }
}
export class Shader extends GObject.Object {
    constructor(properties?: Partial<Shader.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Shader.ConstructorProperties>, ...args: any[]): void;
    // Properties
    compiled: boolean;
    enabled: boolean;
    fragment_source: string;
    vertex_source: string;
    // Constructors
    static ["new"](): Shader;
    // Members
    compile(): boolean;
    get_cogl_fragment_shader(): Cogl.Handle;
    get_cogl_program(): Cogl.Handle;
    get_cogl_vertex_shader(): Cogl.Handle;
    get_fragment_source(): string;
    get_is_enabled(): boolean;
    get_vertex_source(): string;
    is_compiled(): boolean;
    release(): void;
    set_fragment_source(data: string, length: number): void;
    set_is_enabled(enabled: boolean): void;
    set_uniform(name: string, value: (GObject.Value | string | boolean | number)): void;
    set_vertex_source(data: string, length: number): void;
}
export module ShaderEffect {
    export interface ConstructorProperties extends OffscreenEffect.ConstructorProperties {
        [key: string]: any;
        shader_type: ShaderType;
    }
}
export class ShaderEffect extends OffscreenEffect {
    constructor(properties?: Partial<ShaderEffect.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShaderEffect.ConstructorProperties>, ...args: any[]): void;
    // Properties
    shader_type: ShaderType;
    // Constructors
    static ["new"](shader_type: ShaderType): ShaderEffect;
    // Members
    get_program(): Cogl.Handle;
    get_shader(): Cogl.Handle;
    set_shader_source(source: string): boolean;
    set_uniform_value(name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_get_static_shader_source(): string;
}
export module ShaderFloat {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class ShaderFloat {
    constructor(properties?: Partial<ShaderFloat.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShaderFloat.ConstructorProperties>, ...args: any[]): void;
}
export module ShaderInt {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class ShaderInt {
    constructor(properties?: Partial<ShaderInt.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShaderInt.ConstructorProperties>, ...args: any[]): void;
}
export module ShaderMatrix {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}
export class ShaderMatrix {
    constructor(properties?: Partial<ShaderMatrix.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShaderMatrix.ConstructorProperties>, ...args: any[]): void;
}
export module SnapConstraint {
    export interface ConstructorProperties extends Constraint.ConstructorProperties {
        [key: string]: any;
        from_edge: SnapEdge;
        offset: number;
        source: Actor;
        to_edge: SnapEdge;
    }
}
export class SnapConstraint extends Constraint {
    constructor(properties?: Partial<SnapConstraint.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SnapConstraint.ConstructorProperties>, ...args: any[]): void;
    // Properties
    from_edge: SnapEdge;
    offset: number;
    source: Actor;
    to_edge: SnapEdge;
    // Constructors
    static ["new"](source: Actor | null, from_edge: SnapEdge, to_edge: SnapEdge, offset: number): SnapConstraint;
    // Members
    get_edges(): [SnapEdge, SnapEdge];
    get_offset(): number;
    get_source(): Actor;
    set_edges(from_edge: SnapEdge, to_edge: SnapEdge): void;
    set_offset(offset: number): void;
    set_source(source: Actor | null): void;
}
export module Stage {
    export interface ConstructorProperties extends Group.ConstructorProperties {
        [key: string]: any;
        accept_focus: boolean;
        color: Color;
        cursor_visible: boolean;
        fog: Fog;
        fullscreen_set: boolean;
        key_focus: Actor;
        no_clear_hint: boolean;
        offscreen: boolean;
        perspective: Perspective;
        title: string;
        use_alpha: boolean;
        use_fog: boolean;
        user_resizable: boolean;
    }
}
export class Stage extends Group implements Atk.ImplementorIface, Animatable, Container, Scriptable {
    constructor(properties?: Partial<Stage.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Stage.ConstructorProperties>, ...args: any[]): void;
    // Properties
    accept_focus: boolean;
    color: Color;
    cursor_visible: boolean;
    fog: Fog;
    fullscreen_set: boolean;
    key_focus: Actor;
    no_clear_hint: boolean;
    offscreen: boolean;
    perspective: Perspective;
    title: string;
    use_alpha: boolean;
    use_fog: boolean;
    user_resizable: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(signal: 'activate', callback: (_source: this) => void): number;
    emit(signal: 'activate'): void;
    connect(signal: 'after-paint', callback: (_source: this) => void): number;
    connect_after(signal: 'after-paint', callback: (_source: this) => void): number;
    emit(signal: 'after-paint'): void;
    connect(signal: 'deactivate', callback: (_source: this) => void): number;
    connect_after(signal: 'deactivate', callback: (_source: this) => void): number;
    emit(signal: 'deactivate'): void;
    connect(signal: 'delete-event', callback: (_source: this, event: Event) => boolean): number;
    connect_after(signal: 'delete-event', callback: (_source: this, event: Event) => boolean): number;
    emit(signal: 'delete-event', event: Event): void;
    connect(signal: 'fullscreen', callback: (_source: this) => void): number;
    connect_after(signal: 'fullscreen', callback: (_source: this) => void): number;
    emit(signal: 'fullscreen'): void;
    connect(signal: 'unfullscreen', callback: (_source: this) => void): number;
    connect_after(signal: 'unfullscreen', callback: (_source: this) => void): number;
    emit(signal: 'unfullscreen'): void;
    // Constructors
    static ["new"](): Stage;
    static ["new"](...args: never[]): never;
    // Members
    ensure_current(): void;
    ensure_redraw(): void;
    ensure_viewport(): void;
    event(event: Event): boolean;
    event(...args: never[]): never;
    get_accept_focus(): boolean;
    get_actor_at_pos(pick_mode: PickMode, x: number, y: number): Actor;
    get_color(): Color;
    get_fog(): Fog;
    get_fullscreen(): boolean;
    get_key_focus(): Actor;
    get_minimum_size(): [number, number];
    get_motion_events_enabled(): boolean;
    get_no_clear_hint(): boolean;
    get_perspective(): Perspective | null;
    get_redraw_clip_bounds(): cairo.RectangleInt;
    get_throttle_motion_events(): boolean;
    get_title(): string;
    get_use_alpha(): boolean;
    get_use_fog(): boolean;
    get_user_resizable(): boolean;
    hide_cursor(): void;
    is_default(): boolean;
    queue_redraw(): void;
    read_pixels(x: number, y: number, width: number, height: number): Uint8Array;
    set_accept_focus(accept_focus: boolean): void;
    set_color(color: Color): void;
    set_fog(fog: Fog): void;
    set_fullscreen(fullscreen: boolean): void;
    set_key_focus(actor: Actor | null): void;
    set_minimum_size(width: number, height: number): void;
    set_motion_events_enabled(enabled: boolean): void;
    set_no_clear_hint(no_clear: boolean): void;
    set_perspective(perspective: Perspective): void;
    set_throttle_motion_events(throttle: boolean): void;
    set_title(title: string): void;
    set_use_alpha(use_alpha: boolean): void;
    set_use_fog(fog: boolean): void;
    set_user_resizable(resizable: boolean): void;
    show_cursor(): void;
    vfunc_activate(): void;
    vfunc_deactivate(): void;
    vfunc_delete_event(event: Event): boolean;
    vfunc_fullscreen(): void;
    vfunc_unfullscreen(): void;
    static get_default(): Stage;
}
export module StageManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        default_stage: Stage;
    }
}
export class StageManager extends GObject.Object {
    constructor(properties?: Partial<StageManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StageManager.ConstructorProperties>, ...args: any[]): void;
    // Properties
    default_stage: Stage;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'stage-added', callback: (_source: this, stage: Stage) => void): number;
    connect_after(signal: 'stage-added', callback: (_source: this, stage: Stage) => void): number;
    emit(signal: 'stage-added', stage: Stage): void;
    connect(signal: 'stage-removed', callback: (_source: this, stage: Stage) => void): number;
    connect_after(signal: 'stage-removed', callback: (_source: this, stage: Stage) => void): number;
    emit(signal: 'stage-removed', stage: Stage): void;
    // Members
    get_default_stage(): Stage;
    list_stages(): GLib.SList;
    peek_stages(): GLib.SList;
    set_default_stage(stage: Stage): void;
    vfunc_stage_added(stage: Stage): void;
    vfunc_stage_removed(stage: Stage): void;
    static get_default(): StageManager;
}
export module State {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        duration: number;
        state: string;
    }
}
export class State extends GObject.Object implements Scriptable {
    constructor(properties?: Partial<State.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<State.ConstructorProperties>, ...args: any[]): void;
    // Properties
    duration: number;
    state: string;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'completed', callback: (_source: this) => void): number;
    connect_after(signal: 'completed', callback: (_source: this) => void): number;
    emit(signal: 'completed'): void;
    // Constructors
    static ["new"](): State;
    // Members
    get_animator(source_state_name: string, target_state_name: string): Animator;
    get_duration(source_state_name: string | null, target_state_name: string | null): number;
    get_keys(source_state_name: string | null, target_state_name: string | null, object: GObject.Object | null, property_name: string | null): GLib.List;
    get_state(): string;
    get_states(): GLib.List;
    get_timeline(): Timeline;
    remove_key(source_state_name: string | null, target_state_name: string | null, object: GObject.Object | null, property_name: string | null): void;
    set_animator(source_state_name: string, target_state_name: string, animator: Animator | null): void;
    set_duration(source_state_name: string | null, target_state_name: string | null, duration: number): void;
    set_key(source_state_name: string | null, target_state_name: string, object: GObject.Object, property_name: string, mode: number, value: (GObject.Value | string | boolean | number), pre_delay: number, post_delay: number): State;
    set_state(target_state_name: string): Timeline;
    warp_to_state(target_state_name: string): Timeline;
    vfunc_completed(): void;
    // Implemented Members
    get_id(): string;
    parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_id(id_: string): void;
}
export module SwipeAction {
    export interface ConstructorProperties extends GestureAction.ConstructorProperties {
        [key: string]: any;
    }
}
export class SwipeAction extends GestureAction {
    constructor(properties?: Partial<SwipeAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SwipeAction.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'swept', callback: (_source: this, actor: Actor, direction: SwipeDirection) => void): number;
    connect_after(signal: 'swept', callback: (_source: this, actor: Actor, direction: SwipeDirection) => void): number;
    emit(signal: 'swept', actor: Actor, direction: SwipeDirection): void;
    connect(signal: 'swipe', callback: (_source: this, actor: Actor, direction: SwipeDirection) => boolean): number;
    connect_after(signal: 'swipe', callback: (_source: this, actor: Actor, direction: SwipeDirection) => boolean): number;
    emit(signal: 'swipe', actor: Actor, direction: SwipeDirection): void;
    // Constructors
    static ["new"](): SwipeAction;
    static ["new"](...args: never[]): never;
    // Members
    vfunc_swept(actor: Actor, direction: SwipeDirection): void;
    vfunc_swipe(actor: Actor, direction: SwipeDirection): boolean;
}
export module TableLayout {
    export interface ConstructorProperties extends LayoutManager.ConstructorProperties {
        [key: string]: any;
        column_spacing: number;
        easing_duration: number;
        easing_mode: number;
        row_spacing: number;
        use_animations: boolean;
    }
}
export class TableLayout extends LayoutManager {
    constructor(properties?: Partial<TableLayout.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TableLayout.ConstructorProperties>, ...args: any[]): void;
    // Properties
    column_spacing: number;
    easing_duration: number;
    easing_mode: number;
    row_spacing: number;
    use_animations: boolean;
    // Constructors
    static ["new"](): TableLayout;
    // Members
    get_alignment(actor: Actor): [TableAlignment, TableAlignment];
    get_column_count(): number;
    get_column_spacing(): number;
    get_easing_duration(): number;
    get_easing_mode(): number;
    get_expand(actor: Actor): [boolean, boolean];
    get_fill(actor: Actor): [boolean, boolean];
    get_row_count(): number;
    get_row_spacing(): number;
    get_span(actor: Actor): [number, number];
    get_use_animations(): boolean;
    pack(actor: Actor, column: number, row: number): void;
    set_alignment(actor: Actor, x_align: TableAlignment, y_align: TableAlignment): void;
    set_column_spacing(spacing: number): void;
    set_easing_duration(msecs: number): void;
    set_easing_mode(mode: number): void;
    set_expand(actor: Actor, x_expand: boolean, y_expand: boolean): void;
    set_fill(actor: Actor, x_fill: boolean, y_fill: boolean): void;
    set_row_spacing(spacing: number): void;
    set_span(actor: Actor, column_span: number, row_span: number): void;
    set_use_animations(animate: boolean): void;
}
export module TapAction {
    export interface ConstructorProperties extends GestureAction.ConstructorProperties {
        [key: string]: any;
    }
}
export class TapAction extends GestureAction {
    constructor(properties?: Partial<TapAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TapAction.ConstructorProperties>, ...args: any[]): void;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'tap', callback: (_source: this, actor: Actor) => void): number;
    connect_after(signal: 'tap', callback: (_source: this, actor: Actor) => void): number;
    emit(signal: 'tap', actor: Actor): void;
    // Constructors
    static ["new"](): TapAction;
    static ["new"](...args: never[]): never;
    // Members
    vfunc_tap(actor: Actor): boolean;
}
export module Text {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
        activatable: boolean;
        attributes: Pango.AttrList;
        buffer: TextBuffer;
        color: Color;
        cursor_color: Color;
        cursor_color_set: boolean;
        cursor_position: number;
        cursor_size: number;
        cursor_visible: boolean;
        editable: boolean;
        ellipsize: Pango.EllipsizeMode;
        font_description: Pango.FontDescription;
        font_name: string;
        justify: boolean;
        line_alignment: Pango.Alignment;
        line_wrap: boolean;
        line_wrap_mode: Pango.WrapMode;
        max_length: number;
        password_char: number;
        position: number | any;
        selectable: boolean;
        selected_text_color: Color;
        selected_text_color_set: boolean;
        selection_bound: number;
        selection_color: Color;
        selection_color_set: boolean;
        single_line_mode: boolean;
        text: string;
        use_markup: boolean;
    }
}
export class Text extends Actor implements Atk.ImplementorIface, Animatable, Container, Scriptable {
    constructor(properties?: Partial<Text.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Text.ConstructorProperties>, ...args: any[]): void;
    // Properties
    activatable: boolean;
    attributes: Pango.AttrList;
    buffer: TextBuffer;
    color: Color;
    cursor_color: Color;
    cursor_color_set: boolean;
    cursor_position: number;
    cursor_size: number;
    cursor_visible: boolean;
    editable: boolean;
    ellipsize: Pango.EllipsizeMode;
    font_description: Pango.FontDescription;
    font_name: string;
    justify: boolean;
    line_alignment: Pango.Alignment;
    line_wrap: boolean;
    line_wrap_mode: Pango.WrapMode;
    max_length: number;
    password_char: number;
    position: number | any;
    selectable: boolean;
    selected_text_color: Color;
    selected_text_color_set: boolean;
    selection_bound: number;
    selection_color: Color;
    selection_color_set: boolean;
    single_line_mode: boolean;
    text: string;
    use_markup: boolean;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'activate', callback: (_source: this) => void): number;
    connect_after(signal: 'activate', callback: (_source: this) => void): number;
    emit(signal: 'activate'): void;
    connect(signal: 'cursor-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'cursor-changed', callback: (_source: this) => void): number;
    emit(signal: 'cursor-changed'): void;
    connect(signal: 'cursor-event', callback: (_source: this, geometry: Geometry) => void): number;
    connect_after(signal: 'cursor-event', callback: (_source: this, geometry: Geometry) => void): number;
    emit(signal: 'cursor-event', geometry: Geometry): void;
    connect(signal: 'delete-text', callback: (_source: this, start_pos: number, end_pos: number) => void): number;
    connect_after(signal: 'delete-text', callback: (_source: this, start_pos: number, end_pos: number) => void): number;
    emit(signal: 'delete-text', start_pos: number, end_pos: number): void;
    connect(signal: 'insert-text', callback: (_source: this, new_text: string, new_text_length: number, position: any | null) => void): number;
    connect_after(signal: 'insert-text', callback: (_source: this, new_text: string, new_text_length: number, position: any | null) => void): number;
    emit(signal: 'insert-text', new_text: string, new_text_length: number, position: any | null): void;
    connect(signal: 'text-changed', callback: (_source: this) => void): number;
    connect_after(signal: 'text-changed', callback: (_source: this) => void): number;
    emit(signal: 'text-changed'): void;
    // Constructors
    static ["new"](): Text;
    static ["new"](...args: never[]): never;
    static new_full(font_name: string, text: string, color: Color): Text;
    static new_with_buffer(buffer: TextBuffer): Text;
    static new_with_text(font_name: string | null, text: string): Text;
    // Members
    activate(): boolean;
    coords_to_position(x: number, y: number): number;
    delete_chars(n_chars: number): void;
    delete_selection(): boolean;
    delete_text(start_pos: number, end_pos: number): void;
    get_activatable(): boolean;
    get_attributes(): Pango.AttrList;
    get_buffer(): TextBuffer;
    get_chars(start_pos: number, end_pos: number): string;
    get_color(): Color;
    get_cursor_color(): Color;
    get_cursor_position(): number;
    get_cursor_rect(): Rect;
    get_cursor_size(): number;
    get_cursor_visible(): boolean;
    get_editable(): boolean;
    get_ellipsize(): Pango.EllipsizeMode;
    get_font_description(): Pango.FontDescription;
    get_font_name(): string;
    get_justify(): boolean;
    get_layout(): Pango.Layout;
    get_layout_offsets(): [number, number];
    get_line_alignment(): Pango.Alignment;
    get_line_wrap(): boolean;
    get_line_wrap_mode(): Pango.WrapMode;
    get_max_length(): number;
    get_password_char(): number;
    get_selectable(): boolean;
    get_selected_text_color(): Color;
    get_selection(): string;
    get_selection_bound(): number;
    get_selection_color(): Color;
    get_single_line_mode(): boolean;
    get_text(): string;
    get_use_markup(): boolean;
    insert_text(text: string, position: number): void;
    insert_unichar(wc: number): void;
    position_to_coords(position: number): [boolean, number, number, number];
    set_activatable(activatable: boolean): void;
    set_attributes(attrs: Pango.AttrList | null): void;
    set_buffer(buffer: TextBuffer): void;
    set_color(color: Color): void;
    set_cursor_color(color: Color | null): void;
    set_cursor_position(position: number): void;
    set_cursor_size(size: number): void;
    set_cursor_visible(cursor_visible: boolean): void;
    set_editable(editable: boolean): void;
    set_ellipsize(mode: Pango.EllipsizeMode): void;
    set_font_description(font_desc: Pango.FontDescription): void;
    set_font_name(font_name: string | null): void;
    set_justify(justify: boolean): void;
    set_line_alignment(alignment: Pango.Alignment): void;
    set_line_wrap(line_wrap: boolean): void;
    set_line_wrap_mode(wrap_mode: Pango.WrapMode): void;
    set_markup(markup: string | null): void;
    set_max_length(max: number): void;
    set_password_char(wc: number): void;
    set_preedit_string(preedit_str: string | null, preedit_attrs: Pango.AttrList | null, cursor_pos: number): void;
    set_selectable(selectable: boolean): void;
    set_selected_text_color(color: Color | null): void;
    set_selection(start_pos: number, end_pos: number): void;
    set_selection_bound(selection_bound: number): void;
    set_selection_color(color: Color | null): void;
    set_single_line_mode(single_line: boolean): void;
    set_text(text: string | null): void;
    set_use_markup(setting: boolean): void;
    vfunc_activate(): void;
    vfunc_cursor_changed(): void;
    vfunc_cursor_event(geometry: Geometry): void;
    vfunc_text_changed(): void;
}
export module TextBuffer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        length: number;
        max_length: number;
        text: string;
    }
}
export class TextBuffer extends GObject.Object {
    constructor(properties?: Partial<TextBuffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextBuffer.ConstructorProperties>, ...args: any[]): void;
    // Properties
    length: number;
    max_length: number;
    text: string;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'deleted-text', callback: (_source: this, position: number, n_chars: number) => void): number;
    connect_after(signal: 'deleted-text', callback: (_source: this, position: number, n_chars: number) => void): number;
    emit(signal: 'deleted-text', position: number, n_chars: number): void;
    connect(signal: 'inserted-text', callback: (_source: this, position: number, chars: string, n_chars: number) => void): number;
    connect_after(signal: 'inserted-text', callback: (_source: this, position: number, chars: string, n_chars: number) => void): number;
    emit(signal: 'inserted-text', position: number, chars: string, n_chars: number): void;
    // Constructors
    static ["new"](): TextBuffer;
    static new_with_text(text: string | null, text_len: number): TextBuffer;
    // Members
    delete_text(position: number, n_chars: number): number;
    emit_deleted_text(position: number, n_chars: number): void;
    emit_inserted_text(position: number, chars: string, n_chars: number): void;
    get_bytes(): number;
    get_length(): number;
    get_max_length(): number;
    get_text(): string;
    insert_text(position: number, chars: string, n_chars: number): number;
    set_max_length(max_length: number): void;
    set_text(chars: string, n_chars: number): void;
    vfunc_delete_text(position: number, n_chars: number): number;
    vfunc_deleted_text(position: number, n_chars: number): void;
    vfunc_get_length(): number;
    vfunc_get_text(n_bytes: number): string;
    vfunc_insert_text(position: number, chars: string, n_chars: number): number;
    vfunc_inserted_text(position: number, chars: string, n_chars: number): void;
}
export module TextNode {
    export interface ConstructorProperties extends PaintNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextNode extends PaintNode {
    constructor(properties?: Partial<TextNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextNode.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](layout: Pango.Layout | null, color: Color | null): TextNode;
}
export module Texture {
    export interface ConstructorProperties extends Actor.ConstructorProperties {
        [key: string]: any;
        disable_slicing: boolean;
        filename: string;
        filter_quality: TextureQuality;
        keep_aspect_ratio: boolean;
        load_async: boolean;
        load_data_async: boolean;
        pick_with_alpha: boolean;
        pixel_format: Cogl.PixelFormat;
        repeat_x: boolean;
        repeat_y: boolean;
        sync_size: boolean;
        tile_waste: number;
    }
}
export class Texture extends Actor implements Atk.ImplementorIface, Animatable, Container, Scriptable {
    constructor(properties?: Partial<Texture.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Texture.ConstructorProperties>, ...args: any[]): void;
    // Properties
    disable_slicing: boolean;
    filename: string;
    filter_quality: TextureQuality;
    keep_aspect_ratio: boolean;
    load_async: boolean;
    load_data_async: boolean;
    pick_with_alpha: boolean;
    pixel_format: Cogl.PixelFormat;
    repeat_x: boolean;
    repeat_y: boolean;
    sync_size: boolean;
    tile_waste: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'load-finished', callback: (_source: this, error: GLib.Error) => void): number;
    connect_after(signal: 'load-finished', callback: (_source: this, error: GLib.Error) => void): number;
    emit(signal: 'load-finished', error: GLib.Error): void;
    connect(signal: 'pixbuf-change', callback: (_source: this) => void): number;
    connect_after(signal: 'pixbuf-change', callback: (_source: this) => void): number;
    emit(signal: 'pixbuf-change'): void;
    connect(signal: 'size-change', callback: (_source: this, width: number, height: number) => void): number;
    connect_after(signal: 'size-change', callback: (_source: this, width: number, height: number) => void): number;
    emit(signal: 'size-change', width: number, height: number): void;
    // Constructors
    static ["new"](): Texture;
    static ["new"](...args: never[]): never;
    static new_from_actor(actor: Actor): Texture;
    static new_from_file(filename: string): Texture;
    // Members
    get_base_size(): [number, number];
    get_cogl_material(): Cogl.Handle;
    get_cogl_texture(): Cogl.Handle;
    get_filter_quality(): TextureQuality;
    get_keep_aspect_ratio(): boolean;
    get_load_async(): boolean;
    get_load_data_async(): boolean;
    get_max_tile_waste(): number;
    get_pick_with_alpha(): boolean;
    get_pixel_format(): Cogl.PixelFormat;
    get_repeat(): [boolean, boolean];
    get_sync_size(): boolean;
    set_area_from_rgb_data(data: (Uint8Array | string), has_alpha: boolean, x: number, y: number, width: number, height: number, rowstride: number, bpp: number, flags: TextureFlags): boolean;
    set_cogl_material(cogl_material: Cogl.Handle): void;
    set_cogl_texture(cogl_tex: Cogl.Handle): void;
    set_filter_quality(filter_quality: TextureQuality): void;
    set_from_file(filename: string): boolean;
    set_from_rgb_data(data: (Uint8Array | string), has_alpha: boolean, width: number, height: number, rowstride: number, bpp: number, flags: TextureFlags): boolean;
    set_from_yuv_data(data: (Uint8Array | string), width: number, height: number, flags: TextureFlags): boolean;
    set_keep_aspect_ratio(keep_aspect: boolean): void;
    set_load_async(load_async: boolean): void;
    set_load_data_async(load_async: boolean): void;
    set_pick_with_alpha(pick_with_alpha: boolean): void;
    set_repeat(repeat_x: boolean, repeat_y: boolean): void;
    set_sync_size(sync_size: boolean): void;
    vfunc_load_finished(error: GLib.Error): void;
    vfunc_pixbuf_change(): void;
    vfunc_size_change(width: number, height: number): void;
}
export module TextureNode {
    export interface ConstructorProperties extends PipelineNode.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextureNode extends PipelineNode {
    constructor(properties?: Partial<TextureNode.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextureNode.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](texture: Cogl.Texture, color: Color | null, min_filter: ScalingFilter, mag_filter: ScalingFilter): TextureNode;
}
export module Timeline {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        auto_reverse: boolean;
        delay: number;
        direction: TimelineDirection;
        duration: number;
        loop: boolean;
        progress_mode: AnimationMode;
        repeat_count: number;
    }
}
export class Timeline extends GObject.Object implements Scriptable {
    constructor(properties?: Partial<Timeline.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Timeline.ConstructorProperties>, ...args: any[]): void;
    // Properties
    auto_reverse: boolean;
    delay: number;
    direction: TimelineDirection;
    duration: number;
    loop: boolean;
    progress_mode: AnimationMode;
    repeat_count: number;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'completed', callback: (_source: this) => void): number;
    connect_after(signal: 'completed', callback: (_source: this) => void): number;
    emit(signal: 'completed'): void;
    connect(signal: 'marker-reached', callback: (_source: this, marker_name: string, msecs: number) => void): number;
    connect_after(signal: 'marker-reached', callback: (_source: this, marker_name: string, msecs: number) => void): number;
    emit(signal: 'marker-reached', marker_name: string, msecs: number): void;
    connect(signal: 'new-frame', callback: (_source: this, msecs: number) => void): number;
    connect_after(signal: 'new-frame', callback: (_source: this, msecs: number) => void): number;
    emit(signal: 'new-frame', msecs: number): void;
    connect(signal: 'paused', callback: (_source: this) => void): number;
    connect_after(signal: 'paused', callback: (_source: this) => void): number;
    emit(signal: 'paused'): void;
    connect(signal: 'started', callback: (_source: this) => void): number;
    connect_after(signal: 'started', callback: (_source: this) => void): number;
    emit(signal: 'started'): void;
    connect(signal: 'stopped', callback: (_source: this, is_finished: boolean) => void): number;
    connect_after(signal: 'stopped', callback: (_source: this, is_finished: boolean) => void): number;
    emit(signal: 'stopped', is_finished: boolean): void;
    // Constructors
    static ["new"](msecs: number): Timeline;
    // Members
    add_marker(marker_name: string, progress: number): void;
    add_marker_at_time(marker_name: string, msecs: number): void;
    advance(msecs: number): void;
    advance_to_marker(marker_name: string): void;
    clone(): Timeline;
    get_auto_reverse(): boolean;
    get_cubic_bezier_progress(): [boolean, Point, Point];
    get_current_repeat(): number;
    get_delay(): number;
    get_delta(): number;
    get_direction(): TimelineDirection;
    get_duration(): number;
    get_duration_hint(): number;
    get_elapsed_time(): number;
    get_loop(): boolean;
    get_progress(): number;
    get_progress_mode(): AnimationMode;
    get_repeat_count(): number;
    get_step_progress(): [boolean, number, StepMode];
    has_marker(marker_name: string): boolean;
    is_playing(): boolean;
    list_markers(msecs: number): string[];
    pause(): void;
    remove_marker(marker_name: string): void;
    rewind(): void;
    set_auto_reverse(reverse: boolean): void;
    set_cubic_bezier_progress(c_1: Point, c_2: Point): void;
    set_delay(msecs: number): void;
    set_direction(direction: TimelineDirection): void;
    set_duration(msecs: number): void;
    set_loop(loop: boolean): void;
    set_progress_func(func: TimelineProgressFunc | null, notify: GLib.DestroyNotify): void;
    set_progress_mode(mode: AnimationMode): void;
    set_repeat_count(count: number): void;
    set_step_progress(n_steps: number, step_mode: StepMode): void;
    skip(msecs: number): void;
    start(): void;
    stop(): void;
    vfunc_completed(): void;
    vfunc_marker_reached(marker_name: string, msecs: number): void;
    vfunc_new_frame(msecs: number): void;
    vfunc_paused(): void;
    vfunc_started(): void;
    vfunc_stopped(is_finished: boolean): void;
    // Implemented Members
    get_id(): string;
    parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_id(id_: string): void;
}
export module Transition {
    export interface ConstructorProperties extends Timeline.ConstructorProperties {
        [key: string]: any;
        animatable: Animatable;
        interval: Interval;
        remove_on_complete: boolean;
    }
}
export abstract class Transition extends Timeline implements Scriptable {
    constructor(properties?: Partial<Transition.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Transition.ConstructorProperties>, ...args: any[]): void;
    // Properties
    animatable: Animatable;
    interval: Interval;
    remove_on_complete: boolean;
    // Members
    get_animatable(): Animatable;
    get_interval(): Interval;
    get_remove_on_complete(): boolean;
    set_animatable(animatable: Animatable | null): void;
    set_from(value: (GObject.Value | string | boolean | number)): void;
    set_interval(interval: Interval | null): void;
    set_remove_on_complete(remove_complete: boolean): void;
    set_to(value: (GObject.Value | string | boolean | number)): void;
    vfunc_attached(animatable: Animatable): void;
    vfunc_compute_value(animatable: Animatable, interval: Interval, progress: number): void;
    vfunc_detached(animatable: Animatable): void;
}
export module TransitionGroup {
    export interface ConstructorProperties extends Transition.ConstructorProperties {
        [key: string]: any;
    }
}
export class TransitionGroup extends Transition implements Scriptable {
    constructor(properties?: Partial<TransitionGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TransitionGroup.ConstructorProperties>, ...args: any[]): void;
    // Constructors
    static ["new"](): TransitionGroup;
    static ["new"](...args: never[]): never;
    // Members
    add_transition(transition: Transition): void;
    remove_all(): void;
    remove_transition(transition: Transition): void;
}
export module ZoomAction {
    export interface ConstructorProperties extends GestureAction.ConstructorProperties {
        [key: string]: any;
        zoom_axis: ZoomAxis;
    }
}
export class ZoomAction extends GestureAction {
    constructor(properties?: Partial<ZoomAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ZoomAction.ConstructorProperties>, ...args: any[]): void;
    // Properties
    zoom_axis: ZoomAxis;
    // Signals
    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: 'zoom', callback: (_source: this, actor: Actor, focal_point: Point, factor: number) => boolean): number;
    connect_after(signal: 'zoom', callback: (_source: this, actor: Actor, focal_point: Point, factor: number) => boolean): number;
    emit(signal: 'zoom', actor: Actor, focal_point: Point, factor: number): void;
    // Constructors
    static ["new"](): ZoomAction;
    static ["new"](...args: never[]): never;
    // Members
    get_focal_point(): Point;
    get_transformed_focal_point(): Point;
    get_zoom_axis(): ZoomAxis;
    set_zoom_axis(axis: ZoomAxis): void;
    vfunc_zoom(actor: Actor, focal_point: Point, factor: number): boolean;
}
export class ActorBox {
    constructor(x_1: number, y_1: number, x_2: number, y_2: number);
    constructor(copy: ActorBox);
    // Fields
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    // Constructors
    static ["new"](x_1: number, y_1: number, x_2: number, y_2: number): ActorBox;
    // Members
    clamp_to_pixel(): void;
    contains(x: number, y: number): boolean;
    copy(): ActorBox;
    equal(box_b: ActorBox): boolean;
    free(): void;
    from_vertices(verts: Vertex[]): void;
    get_area(): number;
    get_height(): number;
    get_origin(): [number | null, number | null];
    get_size(): [number | null, number | null];
    get_width(): number;
    get_x(): number;
    get_y(): number;
    init(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox;
    init_rect(x: number, y: number, width: number, height: number): void;
    interpolate(_final: ActorBox, progress: number): ActorBox;
    set_origin(x: number, y: number): void;
    set_size(width: number, height: number): void;
    union(b: ActorBox): ActorBox;
    static alloc(): ActorBox;
}
export class ActorIter {
    constructor(properties?: {
        dummy1?: any;
        dummy2?: any;
        dummy3?: any;
        dummy4?: number;
        dummy5?: any;
    });
    constructor(copy: ActorIter);
    // Fields
    dummy1: any;
    dummy2: any;
    dummy3: any;
    dummy4: number;
    dummy5: any;
    // Members
    destroy(): void;
    init(root: Actor): void;
    is_valid(): boolean;
    next(): [boolean, Actor];
    prev(): [boolean, Actor];
    remove(): void;
}
export class ActorMetaPrivate {
    constructor(copy: ActorMetaPrivate);
}
export class ActorPrivate {
    constructor(copy: ActorPrivate);
}
export class AlphaPrivate {
    constructor(copy: AlphaPrivate);
}
export class AnimationPrivate {
    constructor(copy: AnimationPrivate);
}
export class AnimatorKey {
    constructor(copy: AnimatorKey);
    // Members
    get_mode(): number;
    get_object<T = GObject.Object>(): T;
    get_progress(): number;
    get_property_name(): string;
    get_property_type(): GType;
    get_value(value: (GObject.Value | string | boolean | number)): boolean;
}
export class AnimatorPrivate {
    constructor(copy: AnimatorPrivate);
}
export class AnyEvent {
    constructor(copy: AnyEvent);
    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
}
export class BehaviourDepthPrivate {
    constructor(copy: BehaviourDepthPrivate);
}
export class BehaviourEllipsePrivate {
    constructor(copy: BehaviourEllipsePrivate);
}
export class BehaviourOpacityPrivate {
    constructor(copy: BehaviourOpacityPrivate);
}
export class BehaviourPathPrivate {
    constructor(copy: BehaviourPathPrivate);
}
export class BehaviourPrivate {
    constructor(copy: BehaviourPrivate);
}
export class BehaviourRotatePrivate {
    constructor(copy: BehaviourRotatePrivate);
}
export class BehaviourScalePrivate {
    constructor(copy: BehaviourScalePrivate);
}
export class BinLayoutPrivate {
    constructor(copy: BinLayoutPrivate);
}
export class BoxLayoutPrivate {
    constructor(copy: BoxLayoutPrivate);
}
export class BoxPrivate {
    constructor(copy: BoxPrivate);
}
export class ButtonEvent {
    constructor(copy: ButtonEvent);
    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    x: number;
    y: number;
    modifier_state: ModifierType;
    button: number;
    click_count: number;
    axes: number;
    device: InputDevice;
}
export class CairoTexturePrivate {
    constructor(copy: CairoTexturePrivate);
}
export class CanvasPrivate {
    constructor(copy: CanvasPrivate);
}
export class ClickActionPrivate {
    constructor(copy: ClickActionPrivate);
}
export class ClonePrivate {
    constructor(copy: ClonePrivate);
}
export class Color {
    constructor(red: number, green: number, blue: number, alpha: number);
    constructor(copy: Color);
    // Fields
    red: number;
    green: number;
    blue: number;
    alpha: number;
    // Constructors
    static alloc(): Color;
    static ["new"](red: number, green: number, blue: number, alpha: number): Color;
    // Members
    add(b: Color): Color;
    copy(): Color;
    darken(): Color;
    equal(v2: Color): boolean;
    free(): void;
    hash(): number;
    init(red: number, green: number, blue: number, alpha: number): Color;
    interpolate(_final: Color, progress: number): Color;
    lighten(): Color;
    shade(factor: number): Color;
    subtract(b: Color): Color;
    to_hls(): [number, number, number];
    to_pixel(): number;
    to_string(): string;
    static from_hls(hue: number, luminance: number, saturation: number): Color;
    static from_pixel(pixel: number): Color;
    static from_string(str: string): [boolean, Color];
    static get_static(color: StaticColor): Color;
}
export class CrossingEvent {
    constructor(copy: CrossingEvent);
    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    x: number;
    y: number;
    device: InputDevice;
    related: Actor;
}
export class DeformEffectPrivate {
    constructor(copy: DeformEffectPrivate);
}
export class DeviceManagerPrivate {
    constructor(copy: DeviceManagerPrivate);
}
export class DragActionPrivate {
    constructor(copy: DragActionPrivate);
}
export class DropActionPrivate {
    constructor(copy: DropActionPrivate);
}
export class EventSequence {
    constructor(copy: EventSequence);
}
export class FlowLayoutPrivate {
    constructor(copy: FlowLayoutPrivate);
}
export class Fog {
    constructor(properties?: {
        z_near?: number;
        z_far?: number;
    });
    constructor(copy: Fog);
    // Fields
    z_near: number;
    z_far: number;
}
export class Geometry {
    constructor(properties?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    });
    constructor(copy: Geometry);
    // Fields
    x: number;
    y: number;
    width: number;
    height: number;
    // Members
    intersects(geometry1: Geometry): boolean;
    union(geometry_b: Geometry): Geometry;
}
export class GestureActionPrivate {
    constructor(copy: GestureActionPrivate);
}
export class GridLayoutPrivate {
    constructor(copy: GridLayoutPrivate);
}
export class GroupPrivate {
    constructor(copy: GroupPrivate);
}
export class ImagePrivate {
    constructor(copy: ImagePrivate);
}
export class IntervalPrivate {
    constructor(copy: IntervalPrivate);
}
export class KeyEvent {
    constructor(copy: KeyEvent);
    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    modifier_state: ModifierType;
    keyval: number;
    hardware_keycode: number;
    unicode_value: number;
    device: InputDevice;
}
export class KeyframeTransitionPrivate {
    constructor(copy: KeyframeTransitionPrivate);
}
export class Knot {
    constructor(properties?: {
        x?: number;
        y?: number;
    });
    constructor(copy: Knot);
    // Fields
    x: number;
    y: number;
    // Members
    copy(): Knot;
    equal(knot_b: Knot): boolean;
    free(): void;
}
export class ListModelPrivate {
    constructor(copy: ListModelPrivate);
}
export class Margin {
    constructor();
    constructor(copy: Margin);
    // Fields
    left: number;
    right: number;
    top: number;
    bottom: number;
    // Constructors
    static ["new"](): Margin;
    // Members
    copy(): Margin;
    free(): void;
}
export class Matrix {
    constructor(copy: Matrix);
    // Members
    free(): void;
    init_from_array(values: number[]): Matrix;
    init_from_matrix(b: Matrix): Matrix;
    init_identity(): Matrix;
    static alloc(): Matrix;
}
export class ModelIterPrivate {
    constructor(copy: ModelIterPrivate);
}
export class ModelPrivate {
    constructor(copy: ModelPrivate);
}
export class MotionEvent {
    constructor(copy: MotionEvent);
    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    x: number;
    y: number;
    modifier_state: ModifierType;
    axes: number;
    device: InputDevice;
}
export class OffscreenEffectPrivate {
    constructor(copy: OffscreenEffectPrivate);
}
export class PaintNodePrivate {
    constructor(copy: PaintNodePrivate);
}
export class PaintVolume {
    constructor(copy: PaintVolume);
    // Members
    copy(): PaintVolume;
    free(): void;
    get_depth(): number;
    get_height(): number;
    get_origin(): Vertex;
    get_width(): number;
    set_depth(depth: number): void;
    set_from_allocation(actor: Actor): boolean;
    set_height(height: number): void;
    set_origin(origin: Vertex): void;
    set_width(width: number): void;
    union(another_pv: PaintVolume): void;
    union_box(box: ActorBox): void;
}
export class PanActionPrivate {
    constructor(copy: PanActionPrivate);
}
export class PathNode {
    constructor(copy: PathNode);
    // Fields
    type: PathNodeType;
    points: Knot[];
    // Members
    copy(): PathNode;
    equal(node_b: PathNode): boolean;
    free(): void;
}
export class PathPrivate {
    constructor(copy: PathPrivate);
}
export class Perspective {
    constructor(properties?: {
        fovy?: number;
        aspect?: number;
        z_near?: number;
        z_far?: number;
    });
    constructor(copy: Perspective);
    // Fields
    fovy: number;
    aspect: number;
    z_near: number;
    z_far: number;
}
export class Point {
    constructor();
    constructor(copy: Point);
    // Fields
    x: number;
    y: number;
    // Constructors
    static alloc(): Point;
    // Members
    copy(): Point;
    distance(b: Point): [number, number | null, number | null];
    equals(b: Point): boolean;
    free(): void;
    init(x: number, y: number): Point;
    static zero(): Point;
}
export class PropertyTransitionPrivate {
    constructor(copy: PropertyTransitionPrivate);
}
export class Rect {
    constructor();
    constructor(copy: Rect);
    // Fields
    origin: Point;
    size: Size;
    // Constructors
    static alloc(): Rect;
    // Members
    clamp_to_pixel(): void;
    contains_point(point: Point): boolean;
    contains_rect(b: Rect): boolean;
    copy(): Rect;
    equals(b: Rect): boolean;
    free(): void;
    get_center(): Point;
    get_height(): number;
    get_width(): number;
    get_x(): number;
    get_y(): number;
    init(x: number, y: number, width: number, height: number): Rect;
    inset(d_x: number, d_y: number): void;
    intersection(b: Rect): [boolean, Rect | null];
    normalize(): Rect;
    offset(d_x: number, d_y: number): void;
    union(b: Rect): Rect;
    static zero(): Rect;
}
export class RectanglePrivate {
    constructor(copy: RectanglePrivate);
}
export class RotateActionPrivate {
    constructor(copy: RotateActionPrivate);
}
export class ScorePrivate {
    constructor(copy: ScorePrivate);
}
export class ScriptPrivate {
    constructor(copy: ScriptPrivate);
}
export class ScrollActorPrivate {
    constructor(copy: ScrollActorPrivate);
}
export class ScrollEvent {
    constructor(copy: ScrollEvent);
    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    x: number;
    y: number;
    direction: ScrollDirection;
    modifier_state: ModifierType;
    axes: number;
    device: InputDevice;
    scroll_source: ScrollSource;
    finish_flags: ScrollFinishFlags;
}
export class ShaderEffectPrivate {
    constructor(copy: ShaderEffectPrivate);
}
export class ShaderPrivate {
    constructor(copy: ShaderPrivate);
}
export class Size {
    constructor();
    constructor(copy: Size);
    // Fields
    width: number;
    height: number;
    // Constructors
    static alloc(): Size;
    // Members
    copy(): Size;
    equals(b: Size): boolean;
    free(): void;
    init(width: number, height: number): Size;
}
export class StagePrivate {
    constructor(copy: StagePrivate);
}
export class StageStateEvent {
    constructor(copy: StageStateEvent);
    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    changed_mask: StageState;
    new_state: StageState;
}
export class StateKey {
    constructor(copy: StateKey);
    // Members
    get_mode(): number;
    get_object<T = GObject.Object>(): T;
    get_post_delay(): number;
    get_pre_delay(): number;
    get_property_name(): string;
    get_property_type(): GType;
    get_source_state_name(): string;
    get_target_state_name(): string;
    get_value(value: (GObject.Value | string | boolean | number)): boolean;
}
export class StatePrivate {
    constructor(copy: StatePrivate);
}
export class SwipeActionPrivate {
    constructor(copy: SwipeActionPrivate);
}
export class TableLayoutPrivate {
    constructor(copy: TableLayoutPrivate);
}
export class TapActionPrivate {
    constructor(copy: TapActionPrivate);
}
export class TextBufferPrivate {
    constructor(copy: TextBufferPrivate);
}
export class TextPrivate {
    constructor(copy: TextPrivate);
}
export class TexturePrivate {
    constructor(copy: TexturePrivate);
}
export class TimelinePrivate {
    constructor(copy: TimelinePrivate);
}
export class TouchEvent {
    constructor(copy: TouchEvent);
    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    x: number;
    y: number;
    sequence: EventSequence;
    modifier_state: ModifierType;
    axes: number;
    device: InputDevice;
}
export class TouchpadPinchEvent {
    constructor(copy: TouchpadPinchEvent);
    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    phase: TouchpadGesturePhase;
    x: number;
    y: number;
    dx: number;
    dy: number;
    angle_delta: number;
    scale: number;
}
export class TouchpadSwipeEvent {
    constructor(copy: TouchpadSwipeEvent);
    // Fields
    type: EventType;
    time: number;
    flags: EventFlags;
    stage: Stage;
    source: Actor;
    phase: TouchpadGesturePhase;
    n_fingers: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
}
export class TransitionGroupPrivate {
    constructor(copy: TransitionGroupPrivate);
}
export class TransitionPrivate {
    constructor(copy: TransitionPrivate);
}
export class Units {
    constructor(copy: Units);
    // Fields
    unit_type: UnitType;
    value: number;
    pixels: number;
    pixels_set: number;
    serial: number;
    // Members
    copy(): Units;
    free(): void;
    get_unit_type(): UnitType;
    get_unit_value(): number;
    to_pixels(): number;
    to_string(): string;
    static from_cm(cm: number): Units;
    static from_em(em: number): Units;
    static from_em_for_font(font_name: string | null, em: number): Units;
    static from_mm(mm: number): Units;
    static from_pixels(px: number): Units;
    static from_pt(pt: number): Units;
    static from_string(str: string): [boolean, Units];
}
export class Vertex {
    constructor(x: number, y: number, z: number);
    constructor(copy: Vertex);
    // Fields
    x: number;
    y: number;
    z: number;
    // Constructors
    static alloc(): Vertex;
    static ["new"](x: number, y: number, z: number): Vertex;
    // Members
    copy(): Vertex;
    equal(vertex_b: Vertex): boolean;
    free(): void;
    init(x: number, y: number, z: number): Vertex;
}
export class ZoomActionPrivate {
    constructor(copy: ZoomActionPrivate);
}
export class Event {
    constructor(type: EventType);
    constructor(copy: Event);
    // Fields
    any: AnyEvent;
    button: ButtonEvent;
    key: KeyEvent;
    motion: MotionEvent;
    scroll: ScrollEvent;
    stage_state: StageStateEvent;
    crossing: CrossingEvent;
    touch: TouchEvent;
    touchpad_pinch: TouchpadPinchEvent;
    touchpad_swipe: TouchpadSwipeEvent;
    // Constructors
    static ["new"](type: EventType): Event;
    // Members
    copy(): Event;
    free(): void;
    get_angle(target: Event): number;
    get_axes(): [number, number];
    get_button(): number;
    get_click_count(): number;
    get_coords(): [number, number];
    get_device(): InputDevice;
    get_device_id(): number;
    get_device_type(): InputDeviceType;
    get_distance(target: Event): number;
    get_event_sequence(): EventSequence;
    get_flags(): EventFlags;
    get_gesture_motion_delta(): [number | null, number | null];
    get_gesture_phase(): TouchpadGesturePhase;
    get_gesture_pinch_angle_delta(): number;
    get_gesture_pinch_scale(): number;
    get_gesture_swipe_finger_count(): number;
    get_key_code(): number;
    get_key_symbol(): number;
    get_key_unicode(): number;
    get_position(position: Point): void;
    get_related(): Actor;
    get_scroll_delta(): [number, number];
    get_scroll_direction(): ScrollDirection;
    get_scroll_finish_flags(): ScrollFinishFlags;
    get_scroll_source(): ScrollSource;
    get_source(): Actor;
    get_source_device(): InputDevice;
    get_stage(): Stage;
    get_state(): ModifierType;
    get_state_full(): [ModifierType | null, ModifierType | null, ModifierType | null, ModifierType | null, ModifierType | null];
    get_time(): number;
    has_control_modifier(): boolean;
    has_shift_modifier(): boolean;
    is_pointer_emulated(): boolean;
    put(): void;
    set_button(button: number): void;
    set_coords(x: number, y: number): void;
    set_device(device: InputDevice | null): void;
    set_flags(flags: EventFlags): void;
    set_key_code(key_code: number): void;
    set_key_symbol(key_sym: number): void;
    set_key_unicode(key_unicode: number): void;
    set_related(actor: Actor | null): void;
    set_scroll_delta(dx: number, dy: number): void;
    set_scroll_direction(direction: ScrollDirection): void;
    set_source(actor: Actor | null): void;
    set_source_device(device: InputDevice | null): void;
    set_stage(stage: Stage | null): void;
    set_state(state: ModifierType): void;
    set_time(time_: number): void;
    type(): EventType;
    static add_filter(stage: Stage | null, func: EventFilterFunc, notify: GLib.DestroyNotify): number;
    static get(): Event;
    static peek(): Event;
    static remove_filter(id: number): void;
}
export interface AnimatableNamespace {
    $gtype: GType;
}
export interface Animatable extends GObject.Object {
    // Members
    animate_property(animation: Animation, property_name: string, initial_value: (GObject.Value | string | boolean | number), final_value: (GObject.Value | string | boolean | number), progress: number, value: (GObject.Value | string | boolean | number)): boolean;
    find_property(property_name: string): GObject.ParamSpec;
    get_initial_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, GObject.Value];
    set_final_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_animate_property(animation: Animation, property_name: string, initial_value: (GObject.Value | string | boolean | number), final_value: (GObject.Value | string | boolean | number), progress: number, value: (GObject.Value | string | boolean | number)): boolean;
    vfunc_find_property(property_name: string): GObject.ParamSpec;
    vfunc_get_initial_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, GObject.Value];
    vfunc_set_final_state(property_name: string, value: (GObject.Value | string | boolean | number)): void;
}

export const Animatable: AnimatableNamespace;
export interface ContainerNamespace {
    $gtype: GType;
    class_find_child_property(klass: GObject.Object, property_name: string): GObject.ParamSpec;
    class_list_child_properties(klass: GObject.Object): GObject.ParamSpec[];
}
export interface Container extends GObject.Object {
    // Members
    add_actor(actor: Actor): void;
    child_get_property(child: Actor, property: string, value: (GObject.Value | string | boolean | number)): void;
    child_notify(child: Actor, pspec: GObject.ParamSpec): void;
    child_set_property(child: Actor, property: string, value: (GObject.Value | string | boolean | number)): void;
    create_child_meta(actor: Actor): void;
    destroy_child_meta(actor: Actor): void;
    find_child_by_name(child_name: string): Actor;
    foreach(callback: Callback): void;
    foreach_with_internals(callback: Callback): void;
    get_child_meta(actor: Actor): ChildMeta;
    get_children(): GLib.List;
    lower_child(actor: Actor, sibling: Actor | null): void;
    raise_child(actor: Actor, sibling: Actor | null): void;
    remove_actor(actor: Actor): void;
    sort_depth_order(): void;
    vfunc_actor_added(actor: Actor): void;
    vfunc_actor_removed(actor: Actor): void;
    vfunc_add(actor: Actor): void;
    vfunc_child_notify(child: Actor, pspec: GObject.ParamSpec): void;
    vfunc_create_child_meta(actor: Actor): void;
    vfunc_destroy_child_meta(actor: Actor): void;
    vfunc_foreach(callback: Callback): void;
    vfunc_foreach_with_internals(callback: Callback): void;
    vfunc_get_child_meta(actor: Actor): ChildMeta;
    vfunc_lower(actor: Actor, sibling: Actor | null): void;
    vfunc_raise(actor: Actor, sibling: Actor | null): void;
    vfunc_remove(actor: Actor): void;
    vfunc_sort_depth_order(): void;
}

export const Container: ContainerNamespace;
export interface ContentNamespace {
    $gtype: GType;
}
export interface Content extends GObject.Object {
    // Members
    get_preferred_size(): [boolean, number, number];
    invalidate(): void;
    vfunc_attached(actor: Actor): void;
    vfunc_detached(actor: Actor): void;
    vfunc_get_preferred_size(): [boolean, number, number];
    vfunc_invalidate(): void;
    vfunc_paint_content(actor: Actor, node: PaintNode): void;
}

export const Content: ContentNamespace;
export interface MediaNamespace {
    $gtype: GType;
}
export interface Media extends GObject.Object {
    // Properties
    audio_volume: number;
    buffer_fill: number;
    can_seek: boolean;
    duration: number;
    playing: boolean;
    progress: number;
    subtitle_font_name: string;
    subtitle_uri: string;
    uri: string;
    // Members
    get_audio_volume(): number;
    get_buffer_fill(): number;
    get_can_seek(): boolean;
    get_duration(): number;
    get_playing(): boolean;
    get_progress(): number;
    get_subtitle_font_name(): string;
    get_subtitle_uri(): string;
    get_uri(): string;
    set_audio_volume(volume: number): void;
    set_filename(filename: string): void;
    set_playing(playing: boolean): void;
    set_progress(progress: number): void;
    set_subtitle_font_name(font_name: string): void;
    set_subtitle_uri(uri: string): void;
    set_uri(uri: string): void;
    vfunc_eos(): void;
    vfunc_error(error: GLib.Error): void;
}

export const Media: MediaNamespace;
export interface ScriptableNamespace {
    $gtype: GType;
}
export interface Scriptable extends GObject.Object {
    // Members
    get_id(): string;
    parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    set_id(id_: string): void;
    vfunc_get_id(): string;
    vfunc_parse_custom_node(script: Script, value: (GObject.Value | string | boolean | number), name: string, node: Json.Node): boolean;
    vfunc_set_custom_property(script: Script, name: string, value: (GObject.Value | string | boolean | number)): void;
    vfunc_set_id(id_: string): void;
}

export const Scriptable: ScriptableNamespace;