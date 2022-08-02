Search.setIndex({"docnames": ["Docs/Explanation/AutonMovement", "Docs/Explanation/FieldOrientedControl", "Docs/Intro/GettingStarted", "Docs/Programming/AutonPathing", "Docs/Programming/AutonTranslate", "Docs/Programming/Opcontrol", "Docs/Programming/Setup", "index"], "filenames": ["Docs\\Explanation\\AutonMovement.rst", "Docs\\Explanation\\FieldOrientedControl.rst", "Docs\\Intro\\GettingStarted.rst", "Docs\\Programming\\AutonPathing.rst", "Docs\\Programming\\AutonTranslate.rst", "Docs\\Programming\\Opcontrol.rst", "Docs\\Programming\\Setup.rst", "index.rst"], "titles": ["Explanation: Holonomic Translation &amp; Path Following", "Explanation: Field Oriented Control", "Getting Started", "Autonomous Path Following", "Autonomous Translation", "Field Oriented Control", "Setting Things Up", "Welcome to HolonomicLib\u2019s documentation!"], "terms": {"befor": [0, 6], "we": [0, 1, 6], "get": [0, 7], "start": [0, 7], "ar": [0, 2, 3, 5, 6], "few": 0, "concept": 0, "you": [0, 1, 2, 3, 4, 5, 6], "should": [0, 1, 2, 3], "understand": [0, 1], "pid": [0, 3, 4, 6], "odometri": [0, 2], "suppos": 0, "want": [0, 1, 2, 4], "move": [0, 1, 3, 4, 5, 6], "from": [0, 2, 3], "0": [0, 1, 3, 4, 5, 6], "deg": 0, "12": 0, "6": 0, "45": [0, 1], "first": [0, 1, 6], "need": [0, 6], "calcul": 0, "x": [0, 1, 2], "y": [0, 1], "rotat": 0, "error": [0, 6], "do": [0, 1, 4, 5, 6, 7], "what": [0, 5, 6], "i": [0, 1, 2, 3, 4, 5, 6], "check": [0, 1, 2], "out": [0, 1, 2, 5], "guid": [0, 3, 7], "can": [0, 1, 2, 3, 4, 5, 6], "easili": 0, "find": 0, "differ": 0, "between": 0, "current": [0, 1], "desir": [0, 1, 3], "posit": [0, 1, 4], "final": [0, 6], "plug": 0, "your": [0, 2, 3, 4, 6], "control": [0, 3, 4, 6, 7], "us": [0, 1, 2, 3, 4, 5, 6, 7], "output": [0, 6], "field": [0, 3, 7], "orient": [0, 7], "function": 0, "here": [0, 2, 3, 4, 5, 6], "how": [0, 1, 6], "would": 0, "thi": [0, 1, 3, 4, 5, 6], "scenario": 0, "void": [0, 3, 4, 5], "opcontrol": [0, 3, 4, 5], "locat": [0, 3], "0_in": [0, 6], "0_deg": 0, "doubl": 0, "currentx": 0, "currenti": 0, "currenttheta": 0, "12_in": 0, "6_in": 0, "45_deg": 0, "desiredx": 0, "desiredi": 0, "desiredtheta": 0, "set": [0, 4, 7], "x_pid_control": 0, "setsetpoint": 0, "y_pid_control": 0, "theta_pid_control": 0, "while": [0, 4, 5], "true": [0, 3, 4, 5, 6], "updat": 0, "getx": 0, "geti": 0, "gettheta": 0, "compar": 0, "x_pid_controller_nam": 0, "y_pid_controller_nam": 0, "theta": [0, 5], "theta_pid_controller_nam": 0, "chassi": [0, 1, 2, 3, 4, 5, 6], "fieldorientedxarcad": [0, 5], "delai": [0, 4, 5], "10": [0, 4, 5], "veri": 0, "similar": 0, "But": [0, 7], "instead": 0, "tell": 0, "robot": [0, 3, 4, 6], "go": [0, 1, 2, 3], "one": [0, 5, 6], "constantli": 0, "travel": 0, "point": 0, "along": 0, "when": [0, 1, 3], "creat": [0, 3, 4, 5, 6], "pathplann": 0, "softwar": 0, "gener": 0, "numer": [0, 5], "csv": [0, 3], "file": [0, 2], "convert": [0, 3, 5], "an": [0, 1, 2, 4, 5, 6], "arrai": 0, "someth": [0, 2, 3, 4], "which": 0, "holonomiclib": [0, 1, 3, 4, 5, 6], "custom": [0, 3], "python": 0, "script": 0, "inform": [0, 3, 4, 5, 6, 7], "trajectori": [0, 2], "object": [0, 6], "continu": 0, "next": [0, 5, 6], "until": [0, 4], "termin": [0, 2, 3], "To": [1, 2, 5], "manipul": 1, "holonom": [1, 2, 3, 5, 7], "drive": [1, 2, 5], "must": [1, 2, 3, 4, 5, 6], "work": [1, 5], "If": [1, 2, 3, 4], "video": [1, 5], "In": 1, "gist": 1, "regardless": 1, "head": 1, "alwai": 1, "left": [1, 3, 4, 5, 6], "right": [1, 3, 4, 5, 6], "forward": 1, "backward": 1, "push": 1, "primari": 1, "respect": 1, "repres": 1, "return": [1, 2], "5": [1, 5], "axi": 1, "2d": 1, "cartesian": 1, "let": 1, "": [1, 2, 3, 4, 5, 6], "sai": 1, "have": [1, 2], "same": 1, "mecanum": [1, 2], "degre": [1, 5], "direct": 1, "yet": 1, "sinc": [1, 4], "goe": [1, 3], "wrong": 1, "thu": [1, 6], "compens": 1, "counterclockwis": 1, "theorem": 1, "x_2": 1, "co": 1, "beta": 1, "x_1": 1, "sin": 1, "y_1": 1, "y_2": 1, "angl": 1, "radian": 1, "thank": 2, "4253b": 2, "advanc": 2, "pro": [2, 4, 5], "program": 2, "librari": [2, 7], "design": 2, "drivetrain": [2, 5], "pleas": [2, 3, 6, 7], "make": [2, 3], "sure": 2, "latest": 2, "version": [2, 5], "okapilib": 2, "applic": 2, "note": 2, "come": 2, "alreadi": 2, "correctli": 2, "run": [2, 3], "like": [2, 3, 4], "latest_vers": 2, "good": 2, "download": [2, 3], "root": [2, 3], "project": [2, 3], "version_numb": 2, "zip": 2, "conductor": 2, "fetch": 2, "appli": 2, "add": 2, "includ": 2, "api": [2, 3, 4, 5, 6, 7], "hpp": 2, "header": 2, "follow": [2, 4, 7], "convertor": [2, 3], "ex": [2, 3, 4], "3": [2, 3, 4, 5, 6], "track": [2, 3, 4, 5, 6], "wheel": [2, 3, 4, 5, 6], "capabl": 2, "exampl": [3, 4, 5, 6], "http": 3, "youtub": 3, "com": 3, "short": 3, "_v6ltc7hawg": 3, "featur": 3, "share": 3, "previous": 3, "folder": 3, "menu": 3, "click": 3, "switch": 3, "button": 3, "choos": 3, "turn": [3, 4, 6], "mode": 3, "outsid": 3, "appropri": 3, "max": [3, 6], "velocit": 3, "acceler": 3, "draw": 3, "ye": 3, "know": [3, 5], "frc": 3, "just": [3, 4], "treat": 3, "normal": 3, "vex": 3, "meter": 3, "its": 3, "unit": 3, "rel": 3, "anywai": 3, "so": 3, "doesn": 3, "t": 3, "realli": 3, "matter": 3, "input": [3, 6], "name": 3, "prompt": 3, "The": [3, 4, 6], "copi": 3, "clipboard": 3, "past": 3, "all": 3, "well": 3, "end": 3, "timedtrajectori": 3, "trajectory_nam": 3, "09546349735777332": 3, "01836722730983333": 3, "9": 3, "648426277155382e": 3, "05": [3, 4, 5, 6], "36": 3, "13455982283961315": 3, "051983191444950824": 3, "000631472862023017": 3, "72": 3, "1642595449156504": 3, "08842596962282846": 3, "0016073473094173115": 3, "1": [3, 4, 5, 6], "08": 3, "18904986189801176": 3, "1260008448867695": 3, "0030294971278352094": 3, "44": 3, "21067589573536047": 3, "16403984120698523": 3, "004898353906373502": 3, "8": 3, "2300362863012862": 3, "2022085110479": 3, "007212444922835768": 3, "2": [3, 4, 5, 6], "16": 3, "settarget": [3, 4], "see": [3, 7], "previou": 3, "articl": 3, "translat": [3, 6, 7], "more": [3, 4, 5, 6, 7], "detail": [3, 6], "about": [3, 7], "async": 3, "behavior": 3, "full": 3, "code": [3, 4], "okapi": [3, 4, 5, 6], "odomchassiscontrol": [3, 4, 5, 6], "base": [3, 4], "std": [3, 4, 5, 6], "shared_ptr": [3, 4, 5, 6], "chassiscontrollerbuild": [3, 4, 5, 6], "withmotor": [3, 4, 5, 6], "top": [3, 4, 5, 6], "revers": [3, 4, 5, 6], "bottom": [3, 4, 5, 6], "4": [3, 4, 5, 6], "withsensor": [3, 4, 5, 6], "adiencod": [3, 4, 5, 6], "A": [3, 4, 5, 6], "b": [3, 4, 5, 6], "encod": [3, 4, 5, 6], "adi": [3, 4, 5, 6], "port": [3, 4, 5, 6], "c": [3, 4, 5, 6], "d": [3, 4, 5, 6], "e": [3, 4, 5, 6], "f": [3, 4, 5, 6], "middl": [3, 4, 5, 6], "specifi": [3, 4, 5, 6], "diamet": [3, 4, 5, 6], "75": [3, 4, 5, 6], "7": [3, 4, 5, 6], "tpr": [3, 4, 5, 6], "360": [3, 4, 5, 6], "distanc": [3, 4, 5, 6], "withodometri": [3, 4, 5, 6], "75_in": [3, 4, 5, 6], "7_in": [3, 4, 5, 6], "1_in": [3, 4, 5, 6], "quadencodertpr": [3, 4, 5, 6], "buildodometri": [3, 4, 5, 6], "asyncholonomicchassiscontrol": [3, 4, 6], "movement": [3, 4], "asyncholonomicchassiscontrollerbuild": [3, 4, 6], "gain": [3, 4, 6], "tune": [3, 4, 6], "withdistgain": [3, 4, 6], "00065": [3, 4, 6], "withturngain": [3, 4, 6], "build": [3, 4, 6], "accord": 3, "via": 3, "regard": [3, 4, 5, 6], "found": [3, 4, 5, 6], "quit": 4, "simpl": 4, "target": [4, 6], "xpose_in": 4, "ypose_in": 4, "zpose_deg": 4, "asynchron": 4, "waituntilsettl": 4, "block": 4, "other": 4, "action": 4, "reach": 4, "snippet": 4, "abov": 4, "equival": 4, "els": 4, "rais": 4, "lift": 4, "certain": 4, "height": 4, "lift_mov": 4, "complet": [4, 5, 6], "reason": 5, "why": 5, "superior": 5, "tradit": 5, "tank": 5, "kei": 5, "possibl": 5, "For": [5, 6, 7], "those": 5, "take": [5, 6], "look": 5, "higher": 5, "cast": 5, "xdrivemodel": 5, "model": 5, "static_pointer_cast": 5, "getmodel": 5, "method": 5, "master": 5, "getanalog": 5, "controlleranalog": 5, "lefti": 5, "leftx": 5, "rightx": 5, "imu": 5, "altern": 5, "getpos": 5, "shown": 6, "below": 6, "assum": 6, "namespac": 6, "checkout": 6, "document": 6, "constructor": 6, "abstract": 6, "ichassi": 6, "configur": 6, "One": 6, "wai": 6, "directli": 6, "const": 6, "iterativepospidcontrol": 6, "idistgain": 6, "iturngain": 6, "anoth": 6, "suppli": 6, "actual": 6, "withdistpid": 6, "unique_ptr": 6, "idistcontrol": 6, "withturnpid": 6, "iturncontrol": 6, "option": 6, "settl": 6, "paramet": 6, "withdistsettleparamet": 6, "qlength": 6, "imaxerror": 6, "qspeed": 6, "imaxderiv": 6, "qtime": 6, "iwaittim": 6, "withturnsettleparamet": 6, "might": 6, "toler": 6, "close": 6, "stop": 6, "5_in": 6, "1_": 6, "deriv": 6, "100_m": 6, "wait": 6, "time": 6, "These": 7, "doc": 7, "provid": 7, "step": 7, "It": 7, "also": 7, "offer": 7, "complex": 7, "algorithm": 7, "behind": 7, "cover": 7, "everyth": 7, "ha": 7, "specif": 7, "thing": 7, "up": 7, "autonom": 7, "path": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"explan": [0, 1, 7], "holonom": 0, "translat": [0, 4], "path": [0, 3], "follow": [0, 3], "field": [1, 5], "orient": [1, 5], "control": [1, 5], "step": 1, "1": 1, "joystick": 1, "input": 1, "2": 1, "rotat": 1, "vector": 1, "get": 2, "start": 2, "instal": 2, "holonomiclib": [2, 7], "pathplann": [2, 3], "option": 2, "hardwar": 2, "prerequisit": 2, "autonom": [3, 4], "set": [3, 6], "up": [3, 6], "gener": 3, "trajectori": 3, "thing": 6, "welcom": 7, "": 7, "document": 7, "introduct": 7, "program": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 56}})