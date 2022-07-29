###################################################
Explanation: Holonomic Translation & Path Following
###################################################

Before we get started, there are a few concepts you should understand: 

* `PID <http://georgegillard.com/documents/2-introduction-to-pid-controllers>`_
* `Odometry <http://thepilons.ca/wp-content/uploads/2018/10/Tracking.pdf>`_

Translation
===========

Suppose you want to move from :math:`(0 in, 0 in, 0 deg)`` to :math:`(12 in, 6 in, 45 deg)`. 
First, you need to calculate the X translation, y translation, and rotation 
error (if you do not understand what error is, check out the PID guide). 
You can easily calculate the error by finding the difference between the 
current and desired position.

.. image:: ../Photos/image8.PNG
    :scale: 40%

Finally, plug the error into your PID controller and use the output in 
your field-oriented control function. 

Here is how I would do it for this scenario: 

.. code-block:: cpp
    :linenos:

    void opcontrol() {
        // Current location: (0_in, 0_in, 0_deg)
        double currentX = 0;
        double currentY = 0;
        double currentTheta = 0;

        // Desired location: (12_in, 6_in, 45_deg)
        double desiredX = 12;
        double desiredY = 6;
        double desiredTheta = 45;

        // Sets PID controllers
        X_PID_CONTROLLER.setSetpoint(desiredX);
        Y_PID_CONTROLLER.setSetpoint(desiredY);
        THETA_PID_CONTROLLER.setSetpoint(desiredTheta);

        while(true) {
            // Update current position
            currentX = ODOMETRY.getX();
            currentY = ODOMETRY.getY();
            currentTheta = ODOMETRY.getTheta();
            
            // Calculate desired output by comparing current and desired position
            double x = X_PID_CONTROLLER_NAME.update(currentX);
            double y = Y_PID_CONTROLLER_NAME.update(currentY);
            double theta = THETA_PID_CONTROLLER_NAME.update(currentTheta);
            
            // Plug desired output into field-oriented control to move the chassis
            CONTROLLER->fieldOrientedXArcade(x, y, theta);

            delay(10);
        }
    }

Path Following
==============

Path following is very similar to translation. But instead of telling the 
robot to go to one position, you constantly tell the robot to travel to 
points along the path.

.. image:: ../Photos/image9.PNG
    :scale: 40%

When you create a path in Pathplanner, the software generates numerous 
points along the path and outputs it to a CSV file. You then need to 
convert the points in the CSV file to an array or something similar which 
the robot can understand (HolonomicLib uses a custom Python script to convert 
the information in the CSV file to a Trajectory object). Finally, to 
follow the path, continuously tell the chassis to travel to the next point 
along the path until it terminates. 
