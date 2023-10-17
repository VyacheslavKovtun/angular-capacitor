package com.test.capacitor;

import com.test.plugins.popup.PopupPluginPlugin;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    registerPlugin(PopupPluginPlugin.class);
    super.onCreate(savedInstanceState);
  }
}
