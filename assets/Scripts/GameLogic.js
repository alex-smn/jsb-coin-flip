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
        NativeBridge.call(() => {
        	this.titleLabel.string = "Now you can try again!"
        	this.balance = 0;
        	this.balanceLabel.string = this.balance;

        	this.headsButton.interactable = true;
        	this.tailsButton.interactable = true; // TODO: separate func

        	this.adButton.node.active = false;
        });
        this.titleLabel.string = "watching ad...";
    },

    flipCoin: function(event, choise) {
    	var result = Math.random() < 0.5 ? CoinState.HEADS : CoinState.TAILS;
		if (result == choise) {
			this.titleLabel.string = "You won!"
			this.balance++;
		} else {
			if (this.balance<=0) {
				this.titleLabel.string = "You lost! Watch an add to try again"
				this.headsButton.interactable = false;
				this.tailsButton.interactable = false;
				this.adButton.node.active = true;
			} else {
				this.titleLabel.string = "You lost!"
			}
			this.balance--;
		}
		this.balanceLabel.string = this.balance;
    }
});
