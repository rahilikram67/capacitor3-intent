package com.capacitor3.intent;

import android.util.Log;

public class IntentResolver {

    public String echo(String value) {
        Log.i("Echo", value);
        return value;
    }
}
