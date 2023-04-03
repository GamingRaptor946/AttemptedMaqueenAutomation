basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # # # .
            `)
        while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
        }
        while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
        }
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # . .
            . # . # .
            . # . # .
            `)
        while (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
        }
        while (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
        }
    }
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        `)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
})
