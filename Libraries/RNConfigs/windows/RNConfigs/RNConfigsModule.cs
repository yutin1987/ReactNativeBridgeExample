using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Com.Reactlibrary.RNConfigs
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNConfigsModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNConfigsModule"/>.
        /// </summary>
        internal RNConfigsModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNConfigs";
            }
        }
    }
}
