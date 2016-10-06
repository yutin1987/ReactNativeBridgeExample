
package com.reactlibrary;

import java.util.HashMap;
import java.util.Map;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

import com.facebook.react.uimanager.IllegalViewOperationException;

import javax.annotation.Nullable;

public class RNConfigsModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNConfigsModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNConfigs";
  }

  @Override
  public @Nullable Map<String, Object> getConstants() {
    HashMap<String, Object> constants = new HashMap<String, Object>();

    constants.put("whoami", "MozTW Taipei");

    return constants;
  }

  @ReactMethod
  public void showGuys(String name, Promise promise) {
    try {
      WritableMap map = Arguments.createMap();

      map.putString("name", name);
      promise.resolve(map);
    } catch (IllegalViewOperationException e) {
      promise.reject(e);
    }
  }
}
