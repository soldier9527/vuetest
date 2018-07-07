<template>
  <div>
      NameRouter
      <div>
          <router-link :to="{ name: 'testname', params: { userId: 123 }}">testName</router-link>
      </div>
  </div>
</template>
