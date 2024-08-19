import {NativeBridge} from "./NativeBridge"

const CoinState = Object.freeze({
    HEADS: 	1,
    TAILS:  2
});


cc.Class({
    extends: cc.Component,

    properties: {
        balanceLabel: {
            default: null,
            type: cc.Label
        },
        titleLabel: {
            default: null,
            type: cc.Label
        },
        headsButton: {
        	default: null,
        	type: cc.Button
        },
        tailsButton: {
        	default: null,
        	type: cc.Button
        },
        adButton: {
        	default: null,
        	type: cc.Button
        },
        balance: 0
    },

    onLoad: function() {
    	this.adButton.node.active = false;
    },

    watchAd: function() {
    	this.titleLabel.string = "watching ad...";
        NativeBridge.call(() => {
        	this.titleLabel.string = "Now you can try again!"
        	this.setAdRequired(false);
        });
    },

    setAdRequired: function(isRequired) {
    	this.headsButton.interactable = !isRequired;
		this.tailsButton.interactable = !isRequired;
		this.adButton.node.active = isRequired;
    },

    flipCoin: function(event, choise) {
    	var result = Math.random() < 0.5 ? CoinState.HEADS : CoinState.TAILS;
		if (result == choise) {
			this.titleLabel.string = "You won!"
			this.balance++;
		} else {
			this.titleLabel.string = "You lost! Watch an ad to try again"
			this.setAdRequired(true);
			this.balance--;
		}
		this.balanceLabel.string = this.balance;
    }
});
