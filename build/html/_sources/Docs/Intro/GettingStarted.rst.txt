.. _getting_started:

###############
Getting Started
###############

Thank you for checking out 4253B's HolonomicLib! HolonomicLib is an advance PROS programming 
library, designed for holonomic drivetrains. To get started, please make sure you have the 
latest version of PROS and OkapiLib installed. You can install these applications here: 

* `PROS <https://github.com/purduesigbots/pros-cli/releases>`_
* `OkapiLib <https://github.com/OkapiLib/OkapiLib/releases>`_ (Note: PROS *should* come with OkapiLib
  already installed)

You can check if PROS is correctly installed by running ``pros --version`` in the terminal. If 
the terminal returns something like ``pros, version [LATEST_VERSION]`` (check out the latest 
version `here <https://github.com/purduesigbots/pros-cli/releases>`_), then you are good to go!

Installing HolonomicLib
***********************

1. Download the latest version of `HolonomicLib <https://github.com/Yessir120/HolonomicLib/releases>`_
   in the root of your project (it should be ``HolonomicLib@VERSION_NUMBER.zip``). 
2. Run ``pros conductor fetch HolonomicLib@VERSION_NUMBER.zip`` 
3. Run ``pros conductor apply HolonomicLib``
4. Add ``#include "HolonomicLib/API.hpp"`` to your header file

Installing Pathplanner (required for pathing)
*********************************************

1. Download the latest version of `Pathplanner <https://github.com/mjansen4857/pathplanner/releases>`_
2. Download ``convertor.exe`` from `HolonomicLib <https://github.com/Yessir120/HolonomicLib/releases>`_
   to the root of your project

Hardware Prerequisites
**********************

- Must have a mecanum or X-Drive chassis
- Must have 3 tracking wheels that are capable of using OkapiLib's odometry or GPS sensor