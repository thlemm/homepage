<template>
  <div>
    <vl-map
      ref="mapObject"
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      :data-projection="'EPSG:' + EPSG"
      :style="{'height': height}"
    >
      <vl-view
        ref="viewObject"
        :zoom="zoom"
        :center="center"
        :rotation="rotation"
      />
      <!-- Add base layer -->
      <component
        :is="layers.base.cmp"
        :key="'base-' + layers.base.id"
        v-bind="layers.base"
      >
        <component
          :is="layers.base.source.cmp"
          :ref="layers.base.source.cmp + '.' + layers.base.id"
          v-bind="layers.base.source"
          :projection="'EPSG:' + EPSG"
        />
      </component>

      <!-- Add overlay layers -->
      <component
        :is="layer.cmp"
        v-for="layer in layers.overlays"
        :key="'overlay-' + layer.id"
        v-bind="layer"
        :visible="layer.visible"
        :z-index="layer.zIndex"
        :opacity="layer.opacity"
      >
        <component
          :is="layer.source.cmp"
          v-bind="layer.source"
          :ref="'sourceRef' + layer.id"
        />
      </component>
    </vl-map>
  </div>
</template>

<script>

import Vue from 'vue'
// eslint-disable-next-line camelcase
import layer_config from '~/static/map/layer_config.json'

export default {
  name: 'GisMap',
  components: {
    Vue
  },
  props: {
    height: {
      type: String,
      default: '100%'
    }
  },
  data () {
    return {
      clickCoordinate: undefined,
      mapRef: {},
      viewRef: {},
      featureInfoHtml: [],
      showFeatureInfoBox: false,
      rotation: 0,
      zoom: 15,
      center: [
        6.966462,
        50.937878
      ],
      EPSG: 4326,
      // eslint-disable-next-line camelcase
      layers: layer_config
    }
  },
  mounted () {
    this.mapRef = this.$refs.mapObject
    this.viewRef = this.$refs.viewObject
    this.mapRef.$once('rendercomplete', (evt) => {
      this.$nuxt.$emit('mapinitcomplete')
    })
  },
  created () {
    this.$nuxt.$on('setLayerVisibility', (layerId, visible) => {
      this.setLayerVisibility(layerId, visible)
    })
    this.$nuxt.$on('setLayerOpacity', (layerId, opacity) => {
      this.setLayerOpacity(layerId, opacity)
    })
  },
  methods: {
    setLayerVisibility (layerId, visible) {
      if (this.mapRef.$map !== undefined) {
        const layer = this.mapRef.$map.getLayers().getArray().find(item => item.values_.id === layerId)
        if (layer) {
          layer.setVisible(visible)
        }
      }
    },
    setLayerOpacity (layerId, opacity) {
      if (this.mapRef.$map !== undefined) {
        const layer = this.mapRef.$map.getLayers().getArray().find(item => item.values_.id === layerId)
        if (layer) {
          layer.setOpacity(opacity)
        }
      }
    },
    reloadLayer (layerId, zoomToExtent) {
      if (this.mapRef.$map !== undefined) {
        const layer = this.mapRef.$map.getLayers().getArray().find(item => item.values_.id === layerId)
        if (layer !== undefined) {
          let source = layer.getSource()
          if (source.source !== undefined) {
            source = source.getSource()
          }
          if (zoomToExtent) {
            source.once('featuresloaded', () => {
              setTimeout(() => this.zoomToExtent(source.getExtent()), 500)
            })
          }
          source.refresh()
        }
      }
    },
    zoomToExtent (extent) {
      if (this.mapRef.$map !== undefined) {
        this.mapRef.$map.getView().fit(extent, { duration: 1000, padding: [50, 50, 50, 50], maxZoom: 17 })
      }
    }
  }
}
</script>

<style>

</style>
