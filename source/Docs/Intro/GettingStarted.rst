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
the terminal returns something like ``pros, version [LATEST_VERSION]``, then you are good to go!

Installing HolonomicLib
-----------------------

1. Download the latest version of `HolonomicLib <https://github.com/Yessir120/HolonomicLib/releases>`_
   in the root of your project. 
2. Run ``pros conductor fetch HolonomicLib.zip`` 
3. Run ``pros conductor apply HolonomicLib``
4. Add ``#include "HolonomicLib/API.hpp"`` to your header file

Installing Pathplanner
----------------------

Pathplanner is the software we use to generate Trajectories for the chassis to follow. 