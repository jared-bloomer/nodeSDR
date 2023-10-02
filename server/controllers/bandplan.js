var bandplan = {
    cm23: {
        start: '1240',
        stop: '1300',
        dataStart: '1240',
        dataStop: '1300',
        channelized: false,
        technicianStart: '1240',
        technicianStop: '1300',
        technicianCWOnly: false,
        generalStart: '1240',
        generalStop: '1300',
        extraStart: '1240',
        extraStop: '1300'
    },
    cm33: {
        start: '902',
        stop: '928',
        dataStart: '902',
        dataStop: '928',
        channelized: false,
        technicianStart: '902',
        technicianStop: '928',
        technicianCWOnly: false,
        generalStart: '902',
        generalStop: '928',
        extraStart: '902',
        extraStop: '928'
    },
    cm70: {
        start: '420',
        stop: '450',
        dataStart: '420',
        dataStop: '450',
        channelized: false,
        technicianStart: '420',
        technicianStop: '450',
        technicianCWOnly: false,
        generalStart: '420',
        generalStop: '450',
        extraStart: '420',
        extraStop: '450'
    },
    m125: {
        start: '219',
        stop: '225',
        dataStart: '219',
        dataStop: '220',
        channelized: false,
        technicianStart: '222',
        technicianStop: '225',
        technicianCWOnly: false,
        generalStart: '222',
        generalStop: '225',
        extraStart: '222',
        extraStop: '225'
    },
    m2: {
        start: '144',
        stop: '148',
        dataStart: '144',
        dataStop: '144.1',
        channelized: false,
        technicianStart: '144.1',
        technicianStop: '148',
        technicianCWOnly: false,
        generalStart: '144.1',
        generalStop: '148',
        extraStart: '144.1',
        extraStop: '148'
    },
    m6: {
        start: '50',
        stop: '54',
        dataStart: '50',
        dataStop: '50.1',
        channelized: false,
        technicianStart: '50.1',
        technicianStop: '54',
        technicianCWOnly: false,
        generalStart: '50.1',
        generalStop: '54',
        extraStart: '50.1',
        extraStop: '54'
    },
    m10: {
        start: '28',
        stop: '29.7',
        dataStart: '28',
        dataStop: '28.3',
        channelized: false,
        technicianStart: '28.3',
        technicianStop: '28.5',
        technicianCWOnly: false,
        generalStart: '28.3',
        generalStop: '29.7',
        extraStart: '28.3',
        extraStop: '29.7'
    },
    m12: {
        start: '24.890',
        stop: '24.990',
        dataStart: '24.890',
        dataStop: '24.930',
        channelized: false,
        technicianStart: '',
        technicianStop: '',
        generalStart: '24.930',
        generalStop: '24.990',
        extraStart: '24.930',
        extraStop: '24.990'
    },
    m15: {
        start: '21',
        stop: '21.450',
        dataStart: '21',
        dataStop: '21.2',
        channelized: false,
        technicianStart: '21.025',
        technicianStop: '21.2',
        technicianCWOnly: true,
        generalStart: '21.275',
        generalStop: '21.450',
        extraStart: '21.2',
        extraStop: '21.450'
    },
    m17: {
        start: '18.068',
        stop: '18.168',
        dataStart: '18.068',
        dataStop: '18.110',
        channelized: false,
        technicianStart: '',
        technicianStop: '',
        generalStart: '18.110',
        generalStop: '18.168',
        extraStart: '18.110',
        extraStop: '18.168'
    },
    m20: {
        start: '14',
        stop: '14.350',
        dataStart: '14',
        dataStop: '14.150',
        channelized: false,
        technicianStart: '',
        technicianStop: '',
        generalStart: '14.225',
        generalStop: '14.350',
        extraStart: '14.150',
        extraStop: '14.350'
    },
    m30: {
        start: '10.1',
        stop: '10.15',
        dataStart: '10.1',
        dataStop: '10.15',
        channelized: false,
        technicianStart: '',
        technicianStop: '',
        generalStart: '10.1',
        generalStop: '10.15',
        extraStart: '10.1',
        extraStop: '10.15'
    },
    m40: {
        start: '7',
        stop: '7.3',
        dataStart: '7',
        dataStop: '7.125',
        channelized: false,
        technicianStart: '7.025',
        technicianStop: '7.125',
        technicianCWOnly: true,
        generalStart: '7.175',
        generalStop: '7.3',
        extraStart: '7.125',
        extraStop: '7.3'
    },
    m60: {
        start: '5.3305',
        stop: '5.405',
        dataStart: '5.3305',
        dataStop: '5.405',
        channelized: true,
        technicianStart: '',
        technicianStop: '',
        generalStart: '5.3305',
        generalStop: '5.405',
        extraStart: '5.3305',
        extraStop: '5.405',
        channels: {
            chan1: '5.332',
            chan2: '5.348',
            chan3: '5.3585',
            chan4: '5.373',
            chan5: '5.405'
        }
    },
    m80: {
        start: '3.5',
        stop: '4',
        dataStart: '3.5',
        dataStop: '3.6',
        channelized: false,
        technicianStart: '3.525',
        technicianStop: '3.6',
        technicianCWOnly: true,
        generalStart: '3.8',
        generalStop: '4',
        extraStart: '3.6',
        extraStop: '4'
    },
    m160: {
        start: '1.8',
        stop: '2',
        dataStart: '1.8',
        dataStop: '2',
        channelized: false,
        technicianStart: '',
        technicianStop: '',
        generalStart: '1.8',
        generalStop: '2',
        extraStart: '1.8',
        extraStop: '2'
    },
    m630: {
        start: '0.472',
        stop: '0.479',
        dataStart: '0.472',
        dataStop: '0.479',
        channelized: false,
        technicianStart: '',
        technicianStop: '',
        generalStart: '0.472',
        generalStop: '0.479',
        extraStart: '0.472',
        extraStop: '0.479'
    },
    m2200: {
        start: '0.1357',
        stop: '0.1378',
        dataStart: '0.1357',
        dataStop: '0.1378',
        channelized: false,
        technicianStart: '',
        technicianStop: '',
        generalStart: '0.1357',
        generalStop: '0.1378',
        extraStart: '0.1357',
        extraStop: '0.1378'
    }
};

module.exports = { bandplan };