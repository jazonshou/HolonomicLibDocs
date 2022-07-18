#########################
Autonomous Path Following
#########################

Example: https://youtube.com/shorts/_V6LtC7hawg?feature=share

Setting Up Pathplanner
----------------------

1. Run ``pathplanner.exe`` from the previously downloaded pathplanner folder
2. Go to the menu and click the "Switch Project" button. Choose the folder of your project
3. Go to settings, and turn on "Holonomic Mode" and "Generate CSV"
4. Outside of the menu, customize the "Generator Settings" with appropriate max velocites 
   and max accelerations

Generating the Trajectory
-------------------------

1. Draw your desired path in pathplanner
2. Run ``convertor.exe`` (downloaded previously) by running ``./convertor`` in the terminal, 
   located in the root of your project
3. Input the name of your path into the terminal when prompted 
4. The generated trajectory will be copied to your clipboard. You can paste the generated trajectory 
   into your project. 

Following the Trajectory
------------------------

1. ``controller->setTarget(TRAJECTORY_NAME, true)`` will make the chassis follow the trajectory
   (please see the previous article on Autonomous Translation for more details about Async behavior)

More information regarding the HolonomicLib API can be found `here <https://yessir120.github.io/HolonomicLib/html/index.html>`_