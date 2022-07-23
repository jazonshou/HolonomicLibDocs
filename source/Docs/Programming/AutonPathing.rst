#########################
Autonomous Path Following
#########################

Example: https://youtube.com/shorts/_V6LtC7hawg?feature=share

Setting Up Pathplanner
----------------------

1. Run ``pathplanner.exe`` from the previously downloaded pathplanner folder download guide 
   `here <https://holonomiclibdocs.readthedocs.io/en/latest/Docs/Intro/GettingStarted.html#installing-pathplanner-optional>`_
2. Go to the menu and click the "Switch Project" button. Choose the folder of your project
3. Go to settings, and turn on "Holonomic Mode" and "Generate CSV"
4. Outside of the menu, customize the "Generator Settings" with appropriate max velocites 
   and max accelerations

.. image:: Photos/image1.PNG
    :scale: 35%

.. image:: Photos/image2.PNG
    :scale: 35%

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

Here is the full example code: 

.. code-block:: cpp
    :linenos:

    std::shared_ptr<OdomChassisController> chassis = ChassisControllerBuilder()
        .withMotors(
            1,  // Top left
            -2, // Top right (reversed)
            -3, // Bottom right (reversed)
            4   // Bottom left
        )
        .withSensors(
            ADIEncoder{'A', 'B'}, // left encoder in ADI ports A & B
            ADIEncoder{'C', 'D', true},  // right encoder in ADI ports C & D (reversed)
            ADIEncoder{'E', 'F'}  // middle encoder in ADI ports E & F
        )
        // specify the tracking wheels diameter (2.75 in), track (7 in), and TPR (360)
        // specify the middle encoder distance (1 in) and diameter (2.75 in)
        .withOdometry({{2.75_in, 7_in, 1_in, 2.75_in}, quadEncoderTPR})
        .buildOdometry();

    std::shared_ptr<AsyncHolonomicChassisController> controller = AsyncHolonomicChassisControllerBuilder()
        // Output chassis controller (must be created before this)
        .withOutput(chassis)
        // PID gains (must be tuned for your robot)
        .withPIDGains(
            {0.05, 0.0, 0.00065, 0.0}, // Translation gains
            {0.05, 0.0, 0.00065, 0.0} // Turn gains
        )
        // Tolerance (how close the chassis must be to the target before stopping)
        .withTolerance({2_in, 2_in, 1_deg})
        .build();

    void opcontrol() {
        TimedTrajectory path = {...}; // Pathplanner path

        controller->setTarget(path, true);
    }

More information regarding the HolonomicLib API can be found `here <https://yessir120.github.io/HolonomicLib/html/index.html>`_